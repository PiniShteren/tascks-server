const mysql = require("mysql");
require("dotenv").config();

const sql = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATANAME,
    connectionLimit : 50 , 
    queueLimit : 0 , 
    waitForConnection : true 
});

sql.on("connect", (err) => {
    if(err) throw err;
    console.log("Connecting");
});

module.exports = sql;