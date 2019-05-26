const envi = process.env.NODE_ENV || 'development';

const config = require('../knexfile')[envi];

module.exports = require('knex')(config);