var passport = require('passport');
var mongoose = require('mongoose');
var User = require('./user.model');

module.exports = {
 //  index: function (req, res) {
 //    NodeModule
 //      .find()
 //      .exec()
 //      .then(function(nodeModules) {
 //        res.send(nodeModules);
 //      });
 // },
 // create: function(req, res, next) {
 //    NodeModule
 //      .create(req.body, function(err, nodeModule){
 //        if(err) return next(err);
 //        res.send(nodeModule);
 //      });
 //  } 

 registerPost: function(req, res) {
  console.log("hit registerPost()");

  User.register(new User({username: req.body.username}), req.body.password, function(err, account) {
    if (err) res.sendStatus(401);

    passport.authenticate('local')(req, res, function() {
      res.sendStatus(201);
    });
  });
 },

 logoutGet: function(req, res) {
  console.log("hit logoutGet()");
  req.logout();
  res.redirect('/');
 }
};

