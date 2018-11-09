const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getRent,
  getUsers: getUsers
}

function getRent (testConn) {
  const conn = testConn || connection
  return conn('rent').select()
}

function getUsers (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id).first()
}
