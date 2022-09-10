const _ = require('lodash');
const { dbClient } = require('../config/index');
const { userController } = require('../user/index');

class Fundraiser {
	constructor() {
		const database = dbClient.db('DaoFundMe');

		// Properties
		this.fundraiserCollection = database.collection('Fundraiser');
		this.databaseName = 'DaoFundMe';
		this.collectionName = 'Fundraiser';
	}

	async updateFundraiser(title, updateDocRequest) {
		const filter = { title };
		const options = { upsert: true };
		const updateDoc = {
			$set: updateDocRequest,
		};

		dbClient.connect(async (err, db) => {
			if (err) throw err;

			// Configuration Setup
			const database = db.db(this.databaseName);
			const collection = database.collection(this.collectionName);

			// Run Statement
			const result = await collection.updateOne(filter, updateDoc, options);
			db.close();
			return result;
		});
	}

	async getFundraiser(title) {
		// Query and Sort options for searching user
		const query = {
			title,
		};
		const options = {
			sort: { title: 1 },
		};

		try {
			// Finds the user in the collection
			const collection = await this.fundraiserCollection.findOne(
				query,
				options
			);

			// If a user is found it will return it otherwise, returns null
			if (!_.isNil(collection)) return collection;
			return null;
		} catch (e) {
			throw e;
		} finally {
			await dbClient.close();
		}
	}

	async createFundraiser(username, fundraiserDocRequest) {
		const fundraiserExist = await this.getFundraiser(
			fundraiserDocRequest.title
		);

		console.log(fundraiserExist);
		if (!_.isNil(fundraiserExist)) return null;

		const fundraiserDoc = { ...fundraiserDocRequest, User: username };

		dbClient.connect(async (err, db) => {
			if (err) throw err;

			// Configuration Setup
			const database = db.db(this.databaseName);
			const collection = database.collection(this.collectionName);

			// Run Statement and add fundraiser to user
			const result = await collection.insertOne(fundraiserDoc);
			await userController.addFundraiser(username, result.insertedId);

			db.close();
			return result;
		});
	}

	async getFundraisers() {
		// Query and Sort options for searching user
		try {
			// Finds all fundraisers and return them
			const result = await this.fundraiserCollection.find({}).toArray();
			return result;
		} catch (e) {
			throw e;
		} finally {
			await dbClient.close();
		}
	}

	async deleteFundraiser(title) {
		const query = { title };

		dbClient.connect(async (err, db) => {
			if (err) throw err;

			// Configuration Setup
			const database = db.db(this.databaseName);
			const collection = database.collection(this.collectionName);

			// Run Statement
			const result = await collection.deleteOne(query);
			db.close();

			return result;
		});
	}
}

module.exports = new Fundraiser();