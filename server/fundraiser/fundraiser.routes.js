const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const {
	getFundraiserRoute,
	createFundraiserRoute,
} = require('./fundraiser.routeController');
const _ = require('lodash');

const router = express.Router();

// Get fundraisers
router.get('/fundraisers', getFundraiserRoute);

// Create fundraisers
router.get('/create', express.json(), createFundraiserRoute);

module.exports = router;
