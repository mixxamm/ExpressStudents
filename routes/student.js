var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
  if (err) return console.log(err)
  db = database.db('exam')
})


router.get('/', (req, res) => {
  db.collection("students").find().sort({naam: 1}).toArray((err, response) => res.render('lijst', {students: response}))
});

router.get('/add', (req, res) => {
  res.render('add');
})

router.post('/add', (req, res) => {
  db.collection("students").findOne({naam: req.body.naam}, (err, response) => {
    if(response === null){
      db.collection("students").insertOne(req.body, (err, response) => {
        res.redirect('/student')
      })
    }else{
      res.render('bestaatAl')
    }
    
  })
  //res.redirect('/student')
})


module.exports = router;
