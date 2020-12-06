const { Pool } = require('pg')

const connectionString = 'postgresql://postgres:Knife444!@192.168.0.16:5432/home'
const pool = new Pool({
    connectionString: connectionString,
})

module.exports = {
  query: (text, callback) => {
    return pool.query(text, callback)
  },
}