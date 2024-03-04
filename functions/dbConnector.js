const mysql2 = require('mysql2');

function connectToDatabase() {
    return mysql2.createConnection({
        host: process.env.rds_instance_endpoint,
        user: process.env.rds_instance_username,
        password: process.env.rds_instance_password,
        database: process.env.databaseName,
    });
}


module.exports = { connectToDatabase };