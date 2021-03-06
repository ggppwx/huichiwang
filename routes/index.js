var express = require('express');
var router = express.Router();
var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.render('index');
}

/* GET home page. */
router.get('/', isAuthenticated, function(req, res, next) {
   console.log('index.js');
   console.log(req.user);
  res.render('index', { user: req.user });
});

module.exports = router;
