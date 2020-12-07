const express = require ('express');
const router = express.Router();
        router.get('/', (req,res) => {
            res.render('pages/Shirtview',{currentUser: req.session.user});
        });
        router.get('/Airy_Cotton_Shirt', (req,res) => {
            res.render('pages/Produk-Shirt1',{currentUser: req.session.user});
        });
        router.get('/Pattern_Shirt', (req,res) => {
            res.render('pages/Produk-Shirt3',{currentUser: req.session.user});
        });
        router.get('/V-Neck_Shirt', (req,res) => {
            res.render('pages/Produk-Shirt4',{currentUser: req.session.user});
        });
        router.get('/Twill_Shacket', (req,res) => {
            res.render('pages/Produk-Shirt2',{currentUser: req.session.user});
        });
    module.exports = router;