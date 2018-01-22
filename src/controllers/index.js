const express = require('express');

const router = express.Router();
const home = require('./home');
const game = require('./game');

router.get('/', home.get)
  .get('/game', game.get);
module.exports = router;
