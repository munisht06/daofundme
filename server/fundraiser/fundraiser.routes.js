const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const fundraiserController = require('./fundraiser.controller');
const _ = require('lodash');

const router = express.Router();

// Get fundraisers
router.get('/fundraisers', async (req, res) => {
	const allFundraisers = await fundraiserController.getFundraisers();
	res.send({ status: 200, fundraisers: allFundraisers });
});

// Create fundraisers
router.get('/create', express.json(), async (req, res) => {
	const data = req.body;
	const username = data.username;
	delete data.username;

	const result = await fundraiserController.createFundraiser(username, data);
	console.log(result);

	if (!_.isEmpty(result))
		return res.send({
			status: 200,
			fundraisers: result,
			message: 'Successfully Created Fundraiser',
		});

	return res.send({
		status: 400,
		message:
			'There was a problem creating your fundraiser. Please, try another title.',
	});
});

module.exports = router;
