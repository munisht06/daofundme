const { auth } = require('express-openid-connect');

require('dotenv').config();

// Auth0 configuration
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASEURL,
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUER
};

//export default auth(config);
module.exports = auth(config);