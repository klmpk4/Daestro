const express = require ('express');
const router = express.Router();
        router.get('/', (req,res) => {
            res.render('pages/Shirtview');
        });
        router.get('/Airy_Cotton_Shirt', (req,res) => {
            res.render('pages/Produk-Shirt1');
        });
        router.get('/Pattern_Shirt', (req,res) => {
            res.render('pages/Produk-Shirt3');
        });
        router.get('/V-Neck_Shirt', (req,res) => {
            res.render('pages/Produk-Shirt4');
        });
        router.get('/Twill_Shacket', (req,res) => {
            res.render('pages/Produk-Shirt2');
        });
    module.exports = router;