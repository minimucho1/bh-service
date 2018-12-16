var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const obj = {
    "hello": "world"
  };
  res.send(obj);
});

module.exports = router;
