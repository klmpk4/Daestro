const express = require ('express');
const router = express.Router();
    router.get('/', (req,res) => {
        res.render('pages/Pantsview');
    });
    router.get('/Ankle_Length_Slacks', (req,res) => {
        res.render('pages/Produk-Pants1',{currentUser: req.session.user});
    });
    router.get('/Cotton_Legging', (req,res) => {
        res.render('pages/Produk-Pants2',{currentUser: req.session.user});
    });
    router.get('/Wide-Cut_Jeans', (req,res) => {
        res.render('pages/Produk-Pants4',{currentUser: req.session.user});
    });
    router.get('/Plaid_Twill_Pants', (req,res) => {
        res.render('pages/Produk-Pants3',{currentUser: req.session.user});
    });
    module.exports = router;