var express = require('express');
var bodyParser = require('body-parser');
var db = require("../database-mongo/index.js");
var bodyParser = require('body-parser');


//var bcrypt = require('bcrypt-nodejs');
// var session = require('express-session');


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

// app.use(session({
//   secret: 'shhh, it\'s a secret',
//   resave: false,
//   saveUninitialized: true
// }));

app.get('/items', function (req, res) {
	console.log('look at the server terminal: in get')
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/items', function (req, res) {
	console.log('look at the server terminal: in post')
	var url = req.body
	db.save(url)
});

app.delete('/items', function (req, res) {
  console.log('look at the server terminal: in delete')
  db.remove(req.body)
});

app.post('/login', function (req, res) {
  console.log('look at the server terminal: in post')
  var url = req.body
  db.save(url)
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('listening on port 3000!');
});

