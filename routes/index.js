const express = require('express');
const router = express.Router();
const User = require ('../models/user');
const Product = require ('../models/product');
const mongoose = require ('mongoose');
const Cart = require ('../models/cart');
mongoose.connect('mongodb+srv://adelataniaaa:kelompok4@cluster0.w0g5p.mongodb.net/daestro?retryWrites=true&w=majority');

        router.get('/', (req,res) => {
            User.find({})
            .sort({createdAt: "descending"})
            .exec((err, users) => {
                if(err){
                    return next(err);
                } else {
                    res.render('pages/index', {currentUser: req.session.user});
                }
            });
        });

        router.get('/allproduct', (req,res) => {
            Product.find({},function(err, docs) {
                if(err){
                    console.log(err);
                }else {
                    var productChunks = [];
                    var chunkSize = 3;
                    for(var i=0; i<docs.length; i+= chunkSize){
                        productChunks.push(docs.slice(i,i + chunkSize));
                    }
                    res.render('pages/All Product row page',{currentUser: req.session.user, products: docs});
                }
            });
        });

        router.get('/faq', (req,res) => {
            res.render('pages/faq',{currentUser: req.session.user});
        });

        router.get('/howtoorder', (req,res) => {
            res.render('pages/MdfOrder',{currentUser: req.session.user});
        });

        router.get('/complain', (req,res) => {
            res.render('pages/Complain',{currentUser: req.session.user});
        });

        router.get('/dropseller', (req,res) => {
            res.render('pages/Dropseller',{currentUser: req.session.user});
        });

        router.get('/privacypolicy', (req,res) => {
            res.render('pages/Privacy & Policy',{currentUser: req.session.user});
        });

        router.get('/trackorder', (req,res) => {
            res.render('pages/Trackform',{currentUser: req.session.user});
        });

        router.get('/add-to-cart/:id', (req,res,next) => {
            var productId = req.params.id;
            var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

            Product.findById(productId, function(err,product){
                if(err){
                    return res.redirect('/');
                }
                cart.add(product, product.id);
                res.session.cart = cart;
                console.log(req.session.cart);
                res.redirect('/');
            });

       });

       router.get('/wishlist', (req,res) => {
            res.render('pages/Wishlist',{currentUser: req.session.user});
        });

        router.get('/paymentconfirm', (req,res) => {
            res.render('pages/paymentconfirm',{currentUser: req.session.user});
       });

       router.get('/terms', (req,res) => {
            res.render('pages/Terms',{currentUser: req.session.user});
        });

        router.get('/receipt', (req,res) => {
            res.render('pages/Receipt',{currentUser: req.session.user});
        });

        router.get('/status', (req,res) => {
            res.render('pages/status',{currentUser: req.session.user});
        });

        router.get('/checkout', (req,res) => {
            res.render('pages/checkout',{currentUser: req.session.user});
        });

        router.get('/ConfirmOrder', (req,res) => {
            res.render('pages/ConfirmOrder',{currentUser: req.session.user});
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
        
module.exports = router;
