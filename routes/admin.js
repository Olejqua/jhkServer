var express = require('express');
var router = express.Router();
var db = require('../utils/db');


/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(db)
  db('test').select('id').then(function(res2) {
    res.send({admin: 'admin', id: res2});

  });
});

module.exports = router;
