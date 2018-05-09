module.exports = function(sequelize, DataTypes) {
	return sequelize.define("Burger", {
		name: DataTypes.STRING,
		eaten: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	},{
		timestamps: false
	})
}

