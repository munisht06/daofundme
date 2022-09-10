const { dbClient } = require('../config/index');
const _ = require('lodash');

class User {
	constructor() {
		const database = dbClient.db('DaoFundMe');

		// Properties
		this.userCollection = database.collection('User');
		this.databaseName = 'DaoFundMe';
		this.collectionName = 'User';
	}

	async addFundraiser(username, fundRaiserId) {
		try {
			// Find the user, Add a new fundraiser to the existing list and create document for updating
			const user = await this.getUser(username);
			const newFundraiserList = [...user.Fundraiser, fundRaiserId];
			const updateDoc = {
				Fundraiser: newFundraiserList,
			};

			// Updates the user with new fundraiser
			const result = this.updateUser(username, updateDoc);
			return result;
		} catch (e) {
			throw e;
		}
	}

	async updateUser(username, updateDocRequest) {
		const filter = { username: username };
		const options = { upsert: true };
		const updateDoc = {
			$set: updateDocRequest,
		};

		try {
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
		} catch (e) {
			throw e;
		}
	}

	async getUser(username) {
		try {
			// Query and Sort options for searching user
			const query = {
				username,
			};
			const options = {
				sort: { username: 1 },
			};

			// Finds the user in the collection
			const user = await this.userCollection.findOne(query, options);

			// If a user is found it will return it otherwise, returns null
			if (!_.isNil(user)) return user;
			return null;
		} catch (e) {
			throw e;
		} finally {
			await dbClient.close();
		}
	}

	async createUser(username, bio, wallet = '') {
		const userExist = await this.getUser(username);
		if (!_.isNil(userExist)) return null;

		// New user data
		const newUserDoc = {
			username,
			bio,
			wallet,
			Fundraiser: [],
		};

		try {
			dbClient.connect(async (err, db) => {
				if (err) throw err;

				// Configuration Setup
				const database = db.db(this.databaseName);
				const collection = database.collection(this.collectionName);

				// Run Statement
				const result = await collection.insertOne(newUserDoc);
				db.close();

				return result;
			});
		} catch (e) {
			throw e;
		}
	}

	async deleteUser(username) {
		try {
			const query = { username };

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
		} catch (e) {
			throw e;
		}
	}
}

module.exports = new User();
