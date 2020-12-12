const express = require('express');
const app = express();
const validator = require('express-validator');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);


//ejs
app.set('view engine', 'ejs');

//bodyParser
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());

//mongoose
mongoose.connect('mongodb+srv://adelataniaaa:kelompok4@cluster0.w0g5p.mongodb.net/daestro?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Database Connected!");
    }
});
require('./config/passport');

//express session
app.use(session({
    secret: 'som3_s3cret_key5',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: {
        maxAge: 180 * 60 * 1000
    }
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
    res.locals.login = req.isAuthenticated();
    res.locals.session = req.session;
    next();
});

//routes
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/user');
const shirtRoutes = require('./routes/shirt');
const tshirtRoutes = require('./routes/t-shirt');
const hoodieRoutes = require('./routes/hoodie');
const bagsRoutes = require('./routes/bags');
const pantsRoutes = require('./routes/pants');

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