const express = require('express');
const mongoose = require ('mongoose');
const app = express();
const bodyParser = require ('body-parser');
const session = require ('express-session');
const InitiateMongoServer = require ('./config/db');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const flash = require ('connect-flash');
    
//ejs
app.set('view engine', 'ejs');

//bodyParser
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

//mongoose
InitiateMongoServer();

//express session
app.use(session ({
    secret: 'som3_s3cret_key5',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 180 * 60 * 1000 }
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req,res,next){
    res.locals.session = req.session;
    next();
});

//routes
const indexRoutes = require ('./routes/index');
const userRoutes = require ('./routes/user');
const shirtRoutes = require ('./routes/shirt');
const tshirtRoutes = require ('./routes/t-shirt');
const hoodieRoutes = require ('./routes/hoodie');
const bagsRoutes = require ('./routes/bags');
const pantsRoutes = require ('./routes/pants');

app.use('/public', express.static('public'));

app.use('/', indexRoutes);
app.use('/user', userRoutes);
app.use('/shirt', shirtRoutes);
app.use('/t-shirt', tshirtRoutes);
app.use('/hoodie', hoodieRoutes);
app.use('/bags', bagsRoutes);
app.use('/pants', pantsRoutes);

const port = process.env.PORT || 8000;
app.listen(port);
console.log(`${port} is the magic port`);