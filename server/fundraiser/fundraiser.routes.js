const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const {
	getFundraiserRoute,
	createFundraiserRoute,
	donateRoute,
} = require('./fundraiser.routeController');
const _ = require('lodash');

const router = express.Router();

// Get fundraisers
router.get('/fundraisers', getFundraiserRoute);

// Create fundraisers
router.post('/create', express.json(), createFundraiserRoute);

// Donate fundraiser
router.post('/donate', express.json(), donateRoute);

module.exports = router;
