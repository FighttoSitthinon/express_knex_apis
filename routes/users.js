const knex = require('../db/knex');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  knex.select().from('users').then(result => {
    res.send(result);
  });
});

router.post('/', (req, res, next) => {
  knex('users').insert({
    name: req.body.name,
    password:req.body.password
  }).then(resp =>{
    res.send(resp);
  });
});

module.exports = router;
