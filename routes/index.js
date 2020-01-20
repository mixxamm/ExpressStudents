var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('lijst.ejs', {});
  res.render('lijst', {students: {naam: "test"}})
});

module.exports = router;
