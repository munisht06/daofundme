const _ = require('lodash');
const dbClient = require('../config/db');
const { userController } = require('../user/index');

class Fundraiser {
	constructor() {
		const database = dbClient.db('DaoFundMe');

		// Properties
		this.fundraiserCollection = database.collection('Fundraiser');
		this.databaseName = 'DaoFundMe';
		this.collectionName = 'Fundraiser';
	}

	async donate(title, amount) {
		const fundraiser = await this.getFundraiser(title);
		const { total, donations } = fundraiser;

		const updateQuery = {
			...fundraiser,
			donations: donations + 1,
			total: total + amount,
		};

		try {
			const result = await this.updateFundraiser(title, updateQuery);
			return result;
		} catch (e) {
			throw e;
		}
	}

	async updateFundraiser(title, updateDocRequest) {
		const filter = { title };
		const options = { upsert: true };
		const updateDoc = {
			$set: updateDocRequest,
		};

		// Run Statement
		const result = await this.fundraiserCollection.updateOne(
			filter,
			updateDoc,
			options
		);
		return result;
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
			return {};
		} catch (e) {
			throw e;
		}
	}

	async createFundraiser(email, fundraiserDocRequest) {
		const fundraiserExist = await this.getFundraiser(
			fundraiserDocRequest.title
		);

		if (!_.isEmpty(fundraiserExist)) return {};

		const fundraiserDoc = {
			...fundraiserDocRequest,
			donations: 1,
			total: 0,
			User: email,
		};

		try {
			// Run Statement and add fundraiser to user
			const result = await this.fundraiserCollection.insertOne(fundraiserDoc);
			await userController.addFundraiser(email, result.insertedId);

			return result;
		} catch (e) {
			throw e;
		}
	}

	async getFundraisers() {
		// Query and Sort options for searching user
		try {
			// Finds all fundraisers and return them
			const result = await this.fundraiserCollection.find({}).toArray();
			return result;
		} catch (e) {
			throw e;
		}
	}

	async deleteFundraiser(title) {
		const query = { title };

		// Run Statement
		const result = this.fundraiserCollection.deleteOne(query);

		return result;
	}
}

module.exports = new Fundraiser();
