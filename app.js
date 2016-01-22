//this is app.js
var express = require("express");
var app = express();

app.set('view engine', 'jade');

app.use( require('stylus').middleware(__dirname+'/public') );
app.use( express.static(__dirname+'/public') );
app.use( express.static(__dirname+'/views') );

app.get('/', function(req, res, next){
	res.render('index.jade');
})

app.listen(3000);

module.exports = app;