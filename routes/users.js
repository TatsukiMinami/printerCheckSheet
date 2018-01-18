var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next){
  var id = req.body.id;
  var password = req.body.password;
});

router.post('/register', function(req, res, next){
  var id = req.body.id;
  var name = req.body.name;
  var class_number = req.body.class_number;
  var password = req.body.password;
  console.log(id);
  console.log(name);
  console.log(class_number);
  console.log(password);
});
module.exports = router;
