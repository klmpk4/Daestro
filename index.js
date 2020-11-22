const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.port || 8000;

//routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);
app.use('/public', express.static('public'));


app.listen(8000);
console.log(`${port} is the magic port`);