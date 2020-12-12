const express = require ('express');
const router = express.Router();

    router.get('/Canvas_Bag', (req,res) => {
        res.render('pages/Produk-Bag2');
    });
    router.get('/Shopper_Bag', (req,res) => {
        res.render('pages/Produk-Bag3');
    });
    router.get('/Shoulder_Bag', (req,res) => {
        res.render('pages/Produk-Bag4');
    });
    router.get('/Waist_Bag', (req,res) => {
        res.render('pages/Produk-Bag1');
    });
    module.exports = router;