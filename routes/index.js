var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '用紙選択' });
});

router.get('/login', function(req, res, next){
  res.render('login', {title: 'ログイン画面'})
});

router.get('/register', function(req, res, next){
  res.render('register', {title: '登録画面'})
});

router.get('/list', function(req, res, next){
  var query = 'SELECT *, DATE_FORMAT(created_at, \'%Y年%m月%d日 %k時%i分%s秒\') AS created_at FROM paper';
  connection.query(query, function(err, row){
    res.render('list',{
      title: '取引一覧',
      paperList: row
    });
  });
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
  var generation = req.body.generation
  var query = 'INSERT INTO user (id, name, class_number, password, generation) VALUES("' + id + '", ' + '"' + name + '", ' + '"' 
           + class_number + '", ' + '"' + password + '", ' + '"' + generation + '")'; 
  createConnection.query(query, function(err,rows){
    res.redirect('/');
  });
});
router.post('/', function(req, res, next){
  var type = req.body.type;
  var floar = req.body.floar;
  var hoge = req.body.class;
  var name = req.body.name;
  var create_at = moment().format('YYYY-MM-DD HH:mm:ss');
  var query = 'INSERT INTO paper ()'
});

module.exports = router;
