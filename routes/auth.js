const express = require ('express');
const user = require('../models/auth');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://adelataniaaa:kelompok4@cluster0.w0g5p.mongodb.net/daestro?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true}
);

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const db = mongoose.connection;

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
    async(req,res) => {
        //cek login
        const email = req.body.email;
        const password = req.body.pass;

        //check username and password
        if (email == "admin@daestro.com" && password == "daestrocloth"){
            //create session for user
            req.session.user= "admin";

            //login success and redirect to member area
            res.redirect('/');
        } else{
            //render the login page with error information
            res.render ('pages/Sign-In Page', {error : 'Wrong email or password.'});
        }
    }
);

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
    async(req,res) => {
        const fullname = req.body.name;
        const email = req.body.email;
        const password = req.body.pass;
        const password2 = req.body.repeatpass;

        if( fullname && email && password && password2) {
            const data = {
                "fullname": fullname,
                "email": email,
                "password": password
            }
            db.collection('Users').insertOne(data, (err, collection) => { 
                if (err) throw err; 
                console.log("Record inserted successfully"); 
            });
            res.redirect('/');
        } else {
            res.render('/auth/signup');
        }
        
    }
);



router.get('/logout',
    async(req,res) => {
        req.session.destroy();

        //redirect to login
        res.redirect('/auth/signin');
    }
);

module.exports = router;