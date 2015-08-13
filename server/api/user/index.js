var router = require('express').Router();
var passport = require('passport');

var controller = require('./user.controller.js');

module.exports = router;

// router.get('/', controller.index);

router.post('/register', controller.registerPost);
router.post('/login', passport.authenticate('local'), controller.loginPost);
router.get('/logout', controller.logoutGet);
