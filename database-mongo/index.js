var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/mvptest');
mongoose.connect('mongodb://IssaAnagreh:isa123@ds115434.mlab.com:15434/mvptest')

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  url: String
});

var MVP = mongoose.model('MVP', itemSchema);

var selectAll = function(callback) {
  MVP.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var save = (data) => {
  console.log('saving in the dataBase', data)
  var img = new MVP ({url: data.url})
  console.log('new image model',img)
  img.save( function (err) {
    if (err) reject(err);
    console.log('saved!')
  })
}

module.exports.selectAll = selectAll;
module.exports.save = save;