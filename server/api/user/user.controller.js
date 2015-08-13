var passport = require('passport');
var mongoose = require('mongoose');
var User = require('./user.model');

module.exports = {

 registerPost: function(req, res) {
  console.log("hit registerPost()");

  User.register(new User({username: req.body.username}), req.body.password, function(err, account) {
    if (err) res.sendStatus(401);

    passport.authenticate('local')(req, res, function() {
      console.log(req.user);
      
      res.json(req.user);
    });
  });
 },

 loginPost: function(req, res) {
  console.log("hit loginPost()");

  res.json(req.user);
 },

 logoutGet: function(req, res) {
  console.log("hit logoutGet()");

  req.logout();
  res.sendStatus(200);
 }
};

