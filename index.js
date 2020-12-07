const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
const session = require ('express-session');
const InitiateMongoServer = require ('./config/db');
const flash = require ('connect-flash');
const passport = require ('passport');
    
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
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

//use flash
app.use(flash());
app.use((req,res,next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
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