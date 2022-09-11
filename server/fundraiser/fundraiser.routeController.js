const fundraiserController = require('./fundraiser.controller');
const _ = require('lodash');

const donateRoute = async (req, res, next) => {
	const data = req.body;
	const result = await fundraiserController.donate(data.title, data.amount);

	if (!_.isNil(result)) {
		return res.send({
			status: 200,
			result,
			message: 'Successfully Proccesed donation!',
		});
	}

	return res.send({
		status: 400,
		result: null,
		message: 'Problem processing donation',
	});
};

const createFundraiserRoute = async (req, res, next) => {
	const data = req.body;
	const email = data.email;
	delete data.email;

	const result = await fundraiserController.createFundraiser(email, data);

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
};

const getFundraiserRoute = async (req, res, next) => {
	const allFundraisers = await fundraiserController.getFundraisers();
	res.send({ status: 200, fundraisers: allFundraisers });
};

module.exports = {
	createFundraiserRoute,
	getFundraiserRoute,
	donateRoute,
};
