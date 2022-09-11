const dbClient = require('../config/db');
const _ = require('lodash');

class User {
	constructor() {
		const database = dbClient.db('DaoFundMe');

		// Properties
		this.userCollection = database.collection('User');
		this.databaseName = 'DaoFundMe';
		this.collectionName = 'User';
	}

	async addFundraiser(email, fundRaiserId) {
		try {
			// Find the user, Add a new fundraiser to the existing list and create document for updating
			const user = await this.getUser(email);
			const newFundraiserList = [...user.Fundraiser, fundRaiserId];
			const updateDoc = {
				Fundraiser: newFundraiserList,
			};

			// Updates the user with new fundraiser
			const result = await this.updateUser(email, updateDoc);
			return result;
		} catch (e) {
			throw e;
		}
	}

	async updateUser(email, updateDocRequest) {
		const filter = { email };
		const options = { upsert: true };
		const updateDoc = {
			$set: updateDocRequest,
		};

		// Run Statement
		try {
			const result = await this.userCollection.updateOne(
				filter,
				updateDoc,
				options
			);
			return result;
		} catch (e) {
			throw e;
		}
	}

	async getUser(email) {
		// Query and Sort options for searching user
		const query = {
			email,
		};
		const options = {
			sort: { email: 1 },
		};

		try {
			// Finds the user in the collection
			const user = await this.userCollection.findOne(query, options);

			// If a user is found it will return it otherwise, returns null
			if (!_.isNil(user)) return user;
			return null;
		} catch (e) {
			throw e;
		}
	}

	async createUser(email, bio, wallet = '') {
		const userExist = await this.getUser(email);
		if (!_.isNil(userExist)) return null;

		// New user data
		const newUserDoc = {
			email,
			bio,
			wallet,
			Fundraiser: [],
		};

		try {
			// Run Statement
			const result = await this.userCollection.insertOne(newUserDoc);
			return result;
		} catch (e) {
			throw e;
		}
	}

	async deleteUser(email) {
		const query = { email };

		try {
			// Run Statement
			const result = await this.userCollection.deleteOne(query);
			return result;
		} catch (e) {
			throw e;
		}
	}
}

module.exports = new User();
