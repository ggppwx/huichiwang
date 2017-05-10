var login = require('./login');
var User = require('../models/user');
module.exports = function(passport){
    // use static serialize and deserialize of model for passport session support
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());

    // Setting up Passport Strategies for Login and SignUp/Registration
    login(passport);
    // signup(passport);

}
