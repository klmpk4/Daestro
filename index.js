var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.set('view engine', 'ejs');

app.use(express.static('public'));

const port = process.env.port || 8000;

app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8000);
console.log('8000 is the magic port');