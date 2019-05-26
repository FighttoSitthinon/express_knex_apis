const knex = require('../db/knex');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    knex.select().from('users').then(result => {
      res.send(result);
    });
  } catch (err) {
    res.send({ error: err });
  }
});

router.post('/', (req, res, next) => {
  try {
    if (req.body.name && req.body.password) {
      knex('users').insert({
        name: req.body.name,
        password: req.body.password
      }).then(resp => {
        res.send(resp);
      });
    } else {
      res.send({ error: 'Value not valid.' });
    }
  } catch (err) {
    res.send({ error: err });
  }
});

module.exports = router;
