var express = require('express');
var ejs = require('express-ejs-layouts');

var app = express();


app.set('view engine', 'ejs');
app.set('views', __dirname);
app.use('/dist', express.static('dist'));



app.get('*', function(req, res) {
    res.render('index.ejs', {url:req.headers.host});
});


app.listen(80);
console.log('Стартуем!!!');