let conn;
require("./connection.js")
	.then(connection => conn = connection)

module.exports = {
	all: function(table){
		return conn.query(`
				SELECT * FROM ??
			`, table);
	},

	one: function(table, condition){
		return conn.query(`
				SELECT * FROM ??
				WHERE ?
				LIMIT 1
			`, [table, condition]);
	},

	create: function(table, col, val){
		return conn.query(`
				INSERT INTO ??(
					??
				)VALUES (
					?
				)
			`, [table, col, val]);
	},

	update: function(table, val, condition){
		return conn.query(`
				UPDATE ??
				SET ?
				WHERE ?
			`, [table, val, condition]);
	},

	delete: function(table, condition){
		return conn.query(`
				DELETE FROM ??
				WHERE ?
			`, [table, condition]);
	}
}