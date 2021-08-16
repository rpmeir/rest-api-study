const pgp = require('pg-promise')();
const db = pgp({
    user: 'dba',
    password: 'S3cr3T',
    host: '192.168.204.10',
    port: 5432,
    database: 'test'
});

module.exports = db;