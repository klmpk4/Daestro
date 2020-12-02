const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    session = require ('express-session'),
    initiateMongoServer = require('./config/db');
    
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

initiateMongoServer();

const port = process.env.PORT || 8000;

//enable session
app.use(session ({
    secret: 'som3_s3cret_key5',
    cookie: {},
    resave: true,
    saveUninitialized: true
}));

//routes
const indexRoutes = require ('./routes/index');
const userRoutes = require ('./routes/user');
const shirtRoutes = require ('./routes/shirt');
const tshirtRoutes = require ('./routes/t-shirt');
const hoodieRoutes = require ('./routes/hoodie');
const bagsRoutes = require ('./routes/bags');
const pantsRoutes = require ('./routes/pants');
const InitiateMongoServer = require('./config/db');

app.use('/public', express.static('public'));

app.use('/', indexRoutes);
app.use('/user', userRoutes);
app.use('/shirt', shirtRoutes);
app.use('/t-shirt', tshirtRoutes);
app.use('/hoodie', hoodieRoutes);
app.use('/bags', bagsRoutes);
app.use('/pants', pantsRoutes);


app.listen(port);
console.log(`${port} is the magic port`);