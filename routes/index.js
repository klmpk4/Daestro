const express = require('express');
const mano = require ('mongodb');
const path = 'mongodb+srv://adelataniaaa:kelompok4@cluster0.w0g5p.mongodb.net/daestro?retryWrites=true&w=majority';
const router = express.Router();
const assert = require('assert');
const Product = require ('../models/product');
const Cart = require ('../models/cart');
const Order = require ('../models/order');

        router.get('/', (req,res) => {
            res.render('pages/index');
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
                    res.render('pages/All Product row page', {products: docs});
                }
            });
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

        router.get('/add-to-cart/:id', (req,res,next) => {
            const productId = req.params.id;
            const cart = new Cart(req.session.cart ? req.session.cart : {});

            Product.findById(productId, function(err,product){
                if(err){
                    return res.redirect('/allproduct');
                }
                cart.add(product, product.id);
                req.session.cart = cart;
                console.log(req.session.cart);
                res.redirect('/allproduct');
            });
       });

       router.get('/cart', function(req,res,next){
           if(!req.session.cart){
               return res.render ('pages/Shopping-Cart', {products: null});
           }
           var cart = new Cart(req.session.cart);
           res.render('pages/Shopping-Cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
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

        router.get('/checkout', isLoggedIn, (req,res,next) => {
            if(!req.session.cart){
                return res.redirect('/cart');
            }
            var cart = new Cart(req.session.cart);
            res.render('pages/checkout', {total: cart.totalPrice});
        });

        router.post('/checkout', (req,res,next) => {
            
        })

        router.get('/ConfirmOrder', (req,res) => {
            if(!req.session.cart){
                return res.redirect('/cart');
            }
            var cart = new Cart(req.session.cart);
            var order = new Order ({
                user : req.user,
                cart : cart,
                address : req.body.address,
                fname : req.body.fname,
                lname : req.body.lname
            });
            mano.connect(path, { useNewUrlParser: true, useUnifiedTopology: true },
                function(err,db){
                    const database = db.db('daestro')
                    assert.strictEqual(null,err)
                    database.collection('usher').insertOne(order,function(err,result){
                        assert.strictEqual(null,err);
                        console.log('item inserted');
                        });
                req.flash('success','Successfully bought product!!');
                req.session.cart = null;
                console.log('cart deleted');
                res.render('pages/ConfirmOrder');
            })
        });

        router.post('/complainget',function(req,res){
            const cform ={
                fname: req.body.fname,
                lname: req.body.lname,
                email: req.body.email,
                complain : req.body.complain
            };
            mano.connect(path, { useNewUrlParser: true, useUnifiedTopology: true }, 
                function(err,db){
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
            mano.connect(path, { useNewUrlParser: true, useUnifiedTopology: true },
                function(err,db){
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

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.session.oldUrl = req.url;
    res.redirect('/user/signin');
};