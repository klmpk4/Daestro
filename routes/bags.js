const express = require ('express');
const router = express.Router();
    router.get('/', (req,res) => {
            res.render('pages/Bagview',{currentUser: req.session.user});
    });
    router.get('/Cotton_Canvas_Bag', (req,res) => {
        res.render('pages/Produk-Bag2',{currentUser: req.session.user});
    });
    router.get('/Shopper_Bag', (req,res) => {
        res.render('pages/Produk-Bag3',{currentUser: req.session.user});
    });
    router.get('/Suede_Shoulder_Bag', (req,res) => {
        res.render('pages/Produk-Bag4',{currentUser: req.session.user});
    });
    router.get('/Waist_Bag', (req,res) => {
        res.render('pages/Produk-Bag1',{currentUser: req.session.user});
    });
    module.exports = router;