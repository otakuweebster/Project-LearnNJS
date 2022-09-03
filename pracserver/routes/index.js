var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Welcome to Project-LearnNJS',
    stuff: 'This is where my bullshit stuff regarding NodeJS is placed for CWEB280. Have a dancing amogus for that'
  });
});

//The middleman
module.exports = router;
