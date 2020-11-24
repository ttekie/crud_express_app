var express = require('express');
var router = express.Router();

/* View - GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express', header:'crud express application ' });
});

/* View - Endpoint - Get New staff page. Show the page */
router.get('/new', (req, res, next) => {
  res.render('staff', { title: 'Express', header: 'New added staff page' });
});

module.exports = router;
