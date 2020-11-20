var express = require('express');
var router = express.Router();

/* GET users home page. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Express', header: 'User Home page' });
});

router.get('/', function(req, res, next) {
  res.render('about_us', { title: 'Express', header: 'About us page' });
});

module.exports = router;
