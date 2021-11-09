const mysql = require('mysql');
//Connect database
//-----------------------------------
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_crud'
});

conn.connect((err) => {
    if (err) throw err;
    console.log("DB is connected successfully: " + conn.threadId);
});
//-----------------------------------

module.exports = conn;