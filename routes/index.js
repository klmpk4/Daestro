const express = require('express'),
        router = express.Router();

        router.get('/', (req,res) => {
            res.render('pages/index');
        });

        router.get('/allProduct', (req,res) => {
            res.render('pages/All Product row page');
        });

        router.get('/faq', (req,res) => {
            res.render('pages/faq');
        });

        router.get('/shirt', (req,res) => {
            res.render('pages/Shirtview');
        });

        router.get('/t-shirt', (req,res) => {
            res.render('pages/T-ShirtView');
        });

        router.get('/hoodie', (req,res) => {
            res.render('pages/Hoodieview');
        });

        router.get('/pants', (req,res) => {
            res.render('pages/Pantsview');
        });

        router.get('/bags', (req,res) => {
            res.render('pages/Bagview');
        });

        router.get('/howToOrder', (req,res) => {
            res.render('pages/MdfOrder');
        });

        router.get('/complain', (req,res) => {
            res.render('pages/Complain');
        });

        router.get('/dropseller', (req,res) => {
            res.render('pages/Dropseller');
        });

        router.get('/privacyPolicy', (req,res) => {
            res.render('pages/Privacy & Policy');
        });

        router.get('/trackOrder', (req,res) => {
            res.render('pages/Trackform');
        });

        router.get('/signIn', (req,res) => {
            res.render('pages/Sign-In Page');
        });

        router.get('/signUp', (req,res) => {
             res.render('pages/Sign-Up Page');
        });

        router.get('/privacyPolicy', (req,res) => {
             res.render('pages/Privacy & Policy');
        });

    module.exports = router;