var router = require('express').Router();

var controller = require('./nodemodule.controller.js');

module.exports = router;

router.get('/', ensureAuthenticated, controller.index);

router.post('/', controller.create);

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  else {
    // Return error content: res.jsonp(...) or redirect: res.redirect('/login')
    res.sendStatus(401);
  }
}