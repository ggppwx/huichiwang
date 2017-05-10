var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

// define the database schema 
var userSchema = new Schema( {
	username: String,
	email: String,
	password: String,
    id: String,
    displayName: String,
    roleLevel: Number 
});

userSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', userSchema);

module.exports = User;