const { mongo } = require('mongoose');
const Cart = require('../models/cart');
const Product = require('../models/product');
const assert = require('assert');
const mano = require('mongodb').MongoClient;
const MONGOURI = 'mongodb+srv://adelataniaaa:kelompok4@cluster0.w0g5p.mongodb.net/daestro?retryWrites=true&w=majority';
const express = require('express'),
        router = express.Router();

        router.get('/', (req,res) => {
            res.render('pages/index');
        });

        router.get('/allproduct', (req,res) => {
            res.render('pages/All Product row page');
        });

        router.get('/faq', (req,res) => {
            res.render('pages/faq');
        });

        router.get('/howtoorder', (req,res) => {
            res.render('pages/MdfOrder');
        });

        router.get('/complain', (req,res) => {
            res.render('pages/Complain');
        });

        router.get('/dropseller', (req,res) => {
            res.render('pages/Dropseller');
        });

        router.get('/privacypolicy', (req,res) => {
            res.render('pages/Privacy & Policy');
        });

        router.get('/trackorder', (req,res) => {
            res.render('pages/Trackform');
        });

        router.get('/cart', (req,res) => {
            res.render('pages/Cart');
       });

       router.get('/wishlist', (req,res) => {
            res.render('pages/Wishlist');
        });

        router.get('/paymentconfirm', (req,res) => {
            res.render('pages/paymentconfirm');
       });

       router.get('/terms', (req,res) => {
            res.render('pages/Terms');
        });

        router.get('/receipt', (req,res) => {
            res.render('pages/Receipt');
        });

        router.get('/status', (req,res) => {
            res.render('pages/status');
        });

        router.get('/checkout', (req,res) => {
            res.render('pages/checkout');
        });

        router.get('/ConfirmOrder', (req,res) => {
            res.render('pages/ConfirmOrder');
        });

        router.post('/complainget',function(req,res){
            const cform ={
                fname: req.body.fname,
                lname: req.body.lname,
                email: req.body.email,
                complain : req.body.complain
            };
            mano.connect(MONGOURI,function(err,db){
                const database = db.db('daestro')
                assert.strictEqual(null,err)
                database.collection('complain').insertOne(cform, function(err,result){
                assert.strictEqual(null,err);
                console.log('item inserted');
                })
                res.redirect('/complain');
            });
        });

        router.post('/paymentconfirmed',function(req,res){
            const confirm ={
                Fullname: req.body.FullName,
                Email : req.body.Email,
                Phone : req.body.PhoneNumber,
                Name: req.body.Name,
                Bank: req.body.BankName,
                Jumlah : req.body.Transfer,
                Tujuan : req.body.Destination,
                Berita : req.body.Berita
            };
            mano.connect(MONGOURI,function(err,db){
                const database = db.db('daestro')
                assert.strictEqual(null,err)
                database.collection('confirmation').insertOne(confirm, function(err,result){
                assert.strictEqual(null,err);
                console.log('item inserted');
                })
                res.redirect('/');
            });
        });

        router.get('/add/:id', function(req,res){
            const productId = req.params.id;
            const cart = new Cart(req.session.cart ? req.session.cart : {items:{}});

            Product.findById(productId, function(err, product){
                if(err){
                    return res.redirect('/');
                }
                cart.add(product,product.id);
                req.session.cart = cart;
                res.redirect('/');
            })
        });

    module.exports = router;
