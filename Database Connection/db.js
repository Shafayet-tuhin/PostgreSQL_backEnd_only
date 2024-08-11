const {Pool} = require('pg')
require('dotenv').config()

const user = process.env.DB_USER;
const password = process.env.DB_PASS

const pool = new Pool (
    {
        user: user,
        host:"localhost",
        port:5432,
        database:"FastFood",
        password:password
    }
)

module.exports = pool ;