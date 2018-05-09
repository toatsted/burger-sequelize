const mysql = require("promise-mysql");

module.exports = (process.env.JAWSDB_URL) ?
	mysql.createConnection(process.env.JAWSDB_URL) :
	mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "Samueljh1",
		database: "burgers_db"
	})