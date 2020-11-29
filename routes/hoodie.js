const express = require ('express');
const router = express.Router();
    router.get('/', (req,res) => {
        res.render('pages/Hoodieview');
    });
    router.get('/Denim_Hoodie', (req,res) => {
        res.render('pages/Produk-Hoodie2');
    });
    router.get('/Rib-Knit_Hoodie', (req,res) => {
        res.render('pages/Produk-Hoodie4');
    });
    router.get('/Printed_Hoodie', (req,res) => {
        res.render('pages/Produk-Hoodie3');
    });
    router.get('/Cotton_Hoodie', (req,res) => {
        res.render('pages/Produk-Hoodie1');
    });
    module.exports = router;