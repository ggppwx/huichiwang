var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var svgCaptcha = require('svg-captcha');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var captcha = svgCaptcha.create();  
  req.session.captcha = captcha.text;  
  var validcode = captcha.data;
  console.log(captcha.text);
  res.render('signup', { title: 'Express', validcode : validcode });
});



router.post('/', function(req, res) {

  // check if the captcha is right 

  if (req.body.captcha.toLowerCase() != req.session.captcha.toLowerCase() ) {
    console.log('valid code error');
    return res.redirect("/signup");

  }

      User.register(new User({ username : req.body.username }), req.body.password, function(err, account) {
          if (err) {
          	console.log('error in register ...');
            return res.redirect('/signup');
          }

          passport.authenticate('local')(req, res, function () {
          	console.log(res);
            res.redirect('/');
          });
      });
});


module.exports = router;