const express = require ('express');
const router = express.Router();
const csrf = require('csurf');
const passport = require('passport'); 

const Order = require('../models/order');
const csrfProtection = csrf();
router.use(csrfProtection);

router.get('/logout', isLoggedIn, function(req,res,next){
    req.logout();
    res.redirect('/');
})

router.use('/', notLoggedIn, function(req,res,next){
    next();
});

router.get('/signup', function(req,res,next){
    var messages = req.flash('error');
    res.render('pages/Sign-Up Page', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/signup', passport.authenticate('local.signup',{
    failureRedirect: '/user/signup',
    failureFlash: true
}), function(req,res){
    if(req.session.oldUrl){
        const oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;
        res.redirect(oldUrl);
    } else{
        res.redirect('/');
    }
});

router.get('/signin', function(req,res,next){
    var messages = req.flash('error');
    res.render('pages/Sign-In Page', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/signin', passport.authenticate('local.signin', {
    failureRedirect: '/user/signin',
    failureFlash: true
}), function(req,res){
    if(req.session.oldUrl){
        const oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;
        res.redirect(oldUrl);
    } else{
        res.redirect('/');
    }
});

module.exports = router;

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
};

function notLoggedIn(req,res,next){
    if(!req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
};