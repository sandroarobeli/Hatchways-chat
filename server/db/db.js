const Sequelize = require("sequelize");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const db = new Sequelize(
	process.env.DATABASE_URL ||
		`postgres://postgres:${process.env.SESSION_SECRET}@127.0.0.1:5432/messenger`,
	{
		logging: false,
	}
);

db.authenticate()
	.then((result) => {
		console.log(
			`Connection to ${process.env.DB_NAME.toUpperCase()} for ${
				process.env.DB_USER
			} has been established`
		);
	})
	.catch((error) => {
		console.log("Unable to connect to the database:", error);
	});

module.exports = db;
