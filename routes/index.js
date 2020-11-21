const express = require('express'),
        router = express.Router();

        router.get('/', (req,res) => {
            res.render('pages/index');
        });

        router.get('/allproduct', (req,res) => {
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

        router.get('/howtoorder', (req,res) => {
            res.render('pages/MdfOrder');
        });

        router.get('/complain', (req,res) => {
            res.render('pages/Complain');
        });

        router.get('/dropseller', (req,res) => {
            res.render('pages/Dropseller');
        });

        router.get('/privacypolicy', (req,res) => {
            res.render('pages/Privacy & Policy');
        });

        router.get('/trackorder', (req,res) => {
            res.render('pages/Trackform');
        });

        router.get('/signin', (req,res) => {
            res.render('pages/Sign-In Page');
        });

        router.get('/signup', (req,res) => {
             res.render('pages/Sign-Up Page');
        });

        router.get('/cart', (req,res) => {
            res.render('pages/Cart');
       });

       router.get('/wishlist', (req,res) => {
            res.render('pages/Wishlist');
        });

        router.get('/paymentconfirm', (req,res) => {
            res.render('pages/paymentconfirm');
       });

       router.get('/terms', (req,res) => {
            res.render('pages/Terms');
        });

        router.get('/receipt', (req,res) => {
            res.render('pages/Receipt');
        });

        router.get('/status', (req,res) => {
            res.render('pages/status');
        });

       router.get('/bags/Cotton_Canvas_Bag', (req,res) => {
            res.render('pages/Produk-Bag2');
        });

        router.get('/pants/Ankle_Length_Slacks', (req,res) => {
            res.render('pages/Produk-Pants1');
       });

       router.get('/bags/Shopper_Bag', (req,res) => {
            res.render('pages/Produk-Bag3');
        });

        router.get('/shirt/Airy_Cotton_Shirt', (req,res) => {
            res.render('pages/Produk-Shirt1');
       });

       router.get('/hoodie/Denim_Hoodie', (req,res) => {
            res.render('pages/Produk-Hoodie2');
        });

        router.get('/t-shirt/Cotton_T-Shirt', (req,res) => {
            res.render('pages/Produk-Tshirt2');
       });

       router.get('/t-shirt/Printed_T-Shirt', (req,res) => {
            res.render('pages/Produk-Tshirt1');
        });

        router.get('/pants/Cotton_Legging', (req,res) => {
            res.render('pages/Produk-Pants2');
       });

       router.get('/shirt/Pattern_Shirt', (req,res) => {
            res.render('pages/Produk-Shirt3');
        });

        router.get('/bags/Suede_Shoulder_Bag', (req,res) => {
            res.render('pages/Produk-Bag4');
       });

       router.get('/hoodie/Rib-Knit_Hoodie', (req,res) => {
            res.render('pages/Produk-Hoodie4');
        });

        router.get('/pants/Wide-Cut_Jeans', (req,res) => {
            res.render('pages/Produk-Pants4');
       });

       router.get('/pants/Plaid_Twill_Pants', (req,res) => {
            res.render('pages/Produk-Pants3');
        });

        router.get('/bags/Waist_Bag', (req,res) => {
            res.render('pages/Produk-Bag1');
       });

       router.get('/shirt/V-Neck_Shirt', (req,res) => {
            res.render('pages/Produk-Shirt4');
        });

        router.get('/t-shirt/Jersey_T-Shirt', (req,res) => {
            res.render('pages/Produk-Tshirt3');
       });

       router.get('/shirt/Twill_Shacket', (req,res) => {
            res.render('pages/Produk-Shirt2');
        });

        router.get('/hoodie/Printed_Hoodie', (req,res) => {
            res.render('pages/Produk-Hoodie3');
       });

       router.get('/t-shirt/Sports_Top', (req,res) => {
            res.render('pages/Produk-Tshirt4');
        });

        router.get('/hoodie/Cotton_Hoodie', (req,res) => {
            res.render('pages/Produk-Hoodie1');
       });
    module.exports = router;