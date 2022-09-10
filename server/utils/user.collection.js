const { dbClient } = require('../config/index');

// Creates a User Collection
dbClient.connect((err, db) => {
	if (err) throw err;

	const database = db.db('DaoFundMe');

	database.createCollection('User', function (err, res) {
		if (err) throw err;

		console.log('Collection is created!');

		db.close();
	});
});
