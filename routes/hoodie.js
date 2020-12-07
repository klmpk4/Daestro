const express = require ('express');
const router = express.Router();
    router.get('/', (req,res) => {
        res.render('pages/Hoodieview',{currentUser: req.session.user});
    });
    router.get('/Denim_Hoodie', (req,res) => {
        res.render('pages/Produk-Hoodie2',{currentUser: req.session.user});
    });
    router.get('/Rib-Knit_Hoodie', (req,res) => {
        res.render('pages/Produk-Hoodie4',{currentUser: req.session.user});
    });
    router.get('/Printed_Hoodie', (req,res) => {
        res.render('pages/Produk-Hoodie3',{currentUser: req.session.user});
    });
    router.get('/Cotton_Hoodie', (req,res) => {
        res.render('pages/Produk-Hoodie1',{currentUser: req.session.user});
    });
    module.exports = router;