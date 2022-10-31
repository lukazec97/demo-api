const mysql = require('mysql');
const initialQuery = require('./query');

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "luka",
    password: "root",
    multipleStatements: true
});
const dbName = 'time_sheet_db';

const serverStartQuery = `CREATE DATABASE IF NOT EXISTS ${dbName}; use ${dbName}`;

mysqlConnection.connect(function (err) {
    if (!mysqlConnection.database) {
        mysqlConnection.query(serverStartQuery);
        mysqlConnection.database = dbName;
    }
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Server running')

    mysqlConnection.query(initialQuery, function (err) {

        if (err) {
            console.log(err.message);
        }
    });
});

module.exports = mysqlConnection;