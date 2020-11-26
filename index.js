const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    url = 'mongodb+srv://adelataniaaa:kelompok4@cluster0.w0g5p.mongodb.net/daestro?retryWrites=true&w=majority';
    mongoose = require('mongoose');
    db = mongoose.connection;

db.once('open', () => {
    console.log('Connected!')
});
    

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.port || 8000;

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

app.listen(8000);
console.log(`${port} is the magic port`);