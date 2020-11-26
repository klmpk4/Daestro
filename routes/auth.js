const express = require ('express');
const router = express.Router();

router.get ('/signin',
    async (req,res) => {
        if (req.session.user){
            res.redirect('/');
        } else {
            res.render('pages/signin');
        }
    }
);

router.post('/signin', 
    async(req,res) => {
        //cek login
        const username = req.body.username;
        const password = req.body.password;

        //check username and password
        if (username == "admin" && password == "admin"){
            //create session for user
            req.session.user= "admin";

            //login success and redirect to member area
            res.redirect('/profile');
        } else{
            //render the login page with error information
            res.render ('/pages/signin', {error : 'Wrong username or password.'});
        }
    }
);

module.exports = router;