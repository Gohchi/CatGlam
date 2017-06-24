var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

  res.render('users', { 
    title: 'Cat Glam - Usuarios',
    logo: 'images/cat_space_moon.gif'
  });
});

module.exports = router;
