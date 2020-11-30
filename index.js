const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    session = require ('express-session');
    

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));



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
const authRoutes = require ('./routes/auth');
const shirtRoutes = require ('./routes/shirt');
const tshirtRoutes = require ('./routes/t-shirt');
const hoodieRoutes = require ('./routes/hoodie');
const bagsRoutes = require ('./routes/bags');
const pantsRoutes = require ('./routes/pants');

app.use('/public', express.static('public'));

app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/shirt', shirtRoutes);
app.use('/t-shirt', tshirtRoutes);
app.use('/hoodie', hoodieRoutes);
app.use('/bags', bagsRoutes);
app.use('/pants', pantsRoutes);

//connect to mongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://adelataniaaa:kelompok4@cluster0.w0g5p.mongodb.net/daestro?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true}
);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//check connection
const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected!');
});
db.on('error', console.error.bind(console, 'MongoDB connection error!'));

app.listen(8000);
console.log(`${port} is the magic port`);