var express = require('express');
var bodyParser = require('body-parser');
var db = require("../database-mongo/index.js");
var bodyParser = require('body-parser');


// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');

var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/items', function (req, res) {
	console.log('look at the server terminal: in get')
	// res.end( JSON.stringify([{
 //        url: `https://upload.wikimedia.org/wikipedia/commons/a/af/All_Gizah_Pyramids.jpg`
 //      }]) )
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
    	console.log(data)
      res.json(data);
    }
  });
});

app.post('/items', function (req, res) {
	console.log('look at the server terminal: in post', req.body)
	var url = req.body
	db.save(url)
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('listening on port 3000!');
});

