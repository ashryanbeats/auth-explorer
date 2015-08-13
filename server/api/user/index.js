var router = require('express').Router();

var controller = require('./user.controller.js');

module.exports = router;

// router.get('/', controller.index);

router.post('/register', controller.registerPost);
router.get('/logout', controller.logoutGet);
