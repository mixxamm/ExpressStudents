var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
  if (err) return console.log(err)
  db = database.db('naamVanDB')
})


router.get('/', function(req, res, next) {
  res.render('lijst', {students: [{naam: "test"}]})
});

module.exports = router;
