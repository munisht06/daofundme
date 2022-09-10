const db = require('./db');
const auth0 = require('./auth0');

// Exports all configuration functions
module.exports = {
	dbClient: db,
	auth0: auth0,
};
