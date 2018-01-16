var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '用紙選択' });
});
router.get('/login', function(req, res, next){
  res.render('login',{title: 'ログイン画面'})
});
router.post('/', function(req, res, next){
  var pepar = req.body.pepar;
  var floar = req.body.floar;
  var hoge = req.body.class;
  var name = req.body.name;
  var createAt = moment().format('YYYY-MM-DD HH:mm:ss');
  
})
module.exports = router;
