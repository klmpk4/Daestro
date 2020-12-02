const express = require ('express');
const router = express.Router();
    router.get('/', (req,res) => {
        res.render('pages/T-ShirtView');
    });
    router.get('/Cotton_T-Shirt', (req,res) => {
        res.render('pages/Produk-Tshirt2');
    });
    router.get('/Printed_T-Shirt', (req,res) => {
        res.render('pages/Produk-Tshirt1');
    });
    router.get('/Jersey_T-Shirt', (req,res) => {
        res.render('pages/Produk-Tshirt3');
    });
    router.get('/Sports_Top', (req,res) => {
        res.render('pages/Produk-Tshirt4');
    });
    module.exports = router;