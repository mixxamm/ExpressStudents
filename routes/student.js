var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
  if (err) return console.log(err)
  db = database.db('exam')
})


router.get('/', function(req, res, next) {
  db.collection("students").find().toArray((err, response) => res.render('lijst', {students: response}))
  //res.render('lijst', {students: [{naam: "test"}]})
});


module.exports = router;
