const express = require ('express');
const router = express.Router();

    router.get('/Ankle_Length_Slacks', (req,res) => {
        res.render('pages/Produk-Pants1');
    });
    router.get('/Cotton_Legging', (req,res) => {
        res.render('pages/Produk-Pants2');
    });
    router.get('/Wide-Cut_Jeans', (req,res) => {
        res.render('pages/Produk-Pants4');
    });
    router.get('/Plaid_Twill_Pants', (req,res) => {
        res.render('pages/Produk-Pants3');
    });
    module.exports = router;
