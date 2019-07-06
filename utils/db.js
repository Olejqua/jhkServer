var config = require('../config.json');
var knex = require('knex')({
  client: config.client,
  connection: config.connection
})


module.exports = knex;
