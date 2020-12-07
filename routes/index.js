const express = require('express');
const router = express.Router();
const User = require ('../models/user');

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
            res.render('pages/All Product row page',{currentUser: req.session.user});
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

        router.get('/cart', (req,res) => {
            res.render('pages/Cart',{currentUser: req.session.user});
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
