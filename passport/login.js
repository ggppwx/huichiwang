var User = require('../models/user');
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {


	passport.use(new LocalStrategy(User.authenticate()));

	/*
	passport.use(new LocalStrategy(
	  function(username, password, done) {
	    User.findOne({ username: username }, function (err, user) {
	      if (err) { return done(err); }
	      if (!user) {
	        return done(null, false, { message: 'Incorrect username.' });
	      }
	      if (!user.validPassword(password)) {
	        return done(null, false, { message: 'Incorrect password.' });
	      }
	      return done(null, user);
	    });
	  }
	));
	*/

}