const { dbClient } = require('../config/index');

// Creates a Fundraiser Collection
dbClient.connect((err, db) => {
	if (err) throw err;

	const database = db.db('DaoFundMe');

	database.createCollection('Fundraiser', function (err, res) {
		if (err) throw err;

		console.log('Collection is created!');

		db.close();
	});
});
