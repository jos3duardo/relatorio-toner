const connection = require('../knexfile')
const database = require('knex')(connection.development)

module.exports = database