const db = require('./db');
const auth0 = require('./auth0');
const appServer = require('./server');

// Exports all configuration functions
module.exports = {
	dbClient: db,
	auth0: auth0,
	appServer,
};
