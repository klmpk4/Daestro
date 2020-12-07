const express = require ('express');
const router = express.Router();
    router.get('/', (req,res) => {
        res.render('pages/T-ShirtView',{currentUser: req.session.user});
    });
    router.get('/Cotton_T-Shirt', (req,res) => {
        res.render('pages/Produk-Tshirt2',{currentUser: req.session.user});
    });
    router.get('/Printed_T-Shirt', (req,res) => {
        res.render('pages/Produk-Tshirt1',{currentUser: req.session.user});
    });
    router.get('/Jersey_T-Shirt', (req,res) => {
        res.render('pages/Produk-Tshirt3',{currentUser: req.session.user});
    });
    router.get('/Sports_Top', (req,res) => {
        res.render('pages/Produk-Tshirt4',{currentUser: req.session.user});
    });
    module.exports = router;