var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login',
	failureFlash : true  
	
}));

router.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
});

module.exports = router;