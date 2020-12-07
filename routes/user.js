const express = require ('express');
const router = express.Router();
const {check, validationResult} = require ('express-validator');
const bcrypt = require ("bcryptjs");
const User = require('../models/user');
const mongoose = require('mongoose');
const jwt = require ('jsonwebtoken');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//login handle
router.get('/signin', (req,res) => {
    if(req.session.user){
        res.redirect('/');
    } else {
        res.render('pages/Sign-In Page', {currentUser: req.session.user});
    }
});

router.get('/signup', (req,res) => {
    if(req.session.user){
        res.redirect('/');
    } else {
        res.render ('pages/Sign-Up Page', {currentUser: req.session.user});
    }
});

//register handle
router.post('/signup',
    [
        check("fullname", "Please enter your fullname")
        .not()
        .isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
            min: 8
        })
    ],
    async (req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            fullname,
            email,
            password
        } = req.body;
        try{
            let user = await User.findOne({
                email
            });

            if(user){
                res.render('pages/Sign-Up Page', {error: 'User Already Exists'});
            } else {
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
                    (err,token) =>{
                        if(err){
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

router.post('/signin', 
    [
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
            min:8
        })
    ],
    async(req,res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
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
    });

//logout
router.get('/logout', (req,res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;