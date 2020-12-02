const express = require ('express');
const router = express.Router();
const { check, validationResult} = require("express-validator");
const bcrypt = require ("bcryptjs");
const jwt = require ('jsonwebtoken');
const User = require('../models/user');
const auth = require('../middleware/auth');
const mongoose = require('mongoose');
const e = require('express');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

router.get ('/signup',
    async (req,res) => {
        if (req.session.user){
            res.redirect('/');
        } else {
            res.render('pages/Sign-Up Page');
        }
    }
);

router.post('/signup',
    [
        check("fullname", "Please enter a valid name")
        .not()
        .isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
            min: 8
        })
    ],
    async(req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            fullname,
            email,
            password,
        } = req.body;
        try{
            let user = await User.findOne({
                email
            });
            if (user) {
                res.render('pages/Sign-Up Page', {error: 'User Already Exists'});
            } else{
                user = new User({
                    fullname,
                    email,
                    password
                });
    
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(password, salt);
    
                await user.save();
    
                const payload = {
                    user: {
                        id: user.id
                    }
                };
    
                jwt.sign(
                    payload,
                    "randomString", {
                        expiresIn: 10000
                    },
                    (err, token) => {
                        if (err) {
                            throw err;
                        } else {
                            console.log({token});
                            req.session.user = "client";
                            res.redirect('/');
                        }
                        
                    }
                );
            }
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }
    }
);

router.get ('/signin',
    async (req,res) => {
        if (req.session.user){
            res.redirect('/');
        } else {
            res.render('pages/Sign-In Page');
        }
    }
);

router.post('/signin', 
[
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
        min: 8
    }) 
],
    async(req,res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.aray()
            });
        }

        const {email, password} = req.body;
        try{
            let user = await User.findOne({
                email
            });
            if(!user){
                res.render('pages/Sign-In Page', {error: 'User Not Exist'});
            } else {
                    const isMatch = await bcrypt.compare(password, user.password);
                        if(!isMatch){
                            res.render('pages/Sign-In Page', {error: 'Incorrect Password!'});
                        } else {
                            const payload = {
                                user: {
                                id: user.id
                                }
                            };
        
                            jwt.sign(
                                payload,
                                "randomString",
                                {
                                    expiresIn: 3600
                                },
                                (err, token) => {
                                    if(err) {
                                        throw err;
                                    } else {
                                        console.log({token});
                                        req.session.user = "client";
                                        res.redirect('/');
                                    }
                                    
                                }
                            );
                        }
                }    
        } catch (e) {
            console.error(e);
            res.status(500).json({
                message: "Server Error"
            });
        }    
    }
);

router.get('/me', auth, async (req,res) => {
    try{
        const user = await User.findById(req.user.id);
        res.json(user);
    } catch (e) {
        res.send({message: "Error in Fetching user"});
    }
});

router.get('/logout',
    async(req,res) => {
        req.session.destroy();

        //redirect to login
        res.redirect('/user/signin');
    }
);

module.exports = router;