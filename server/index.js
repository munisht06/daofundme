const { appServer } = require('./config/index');
const port = process.env.PORT || 3000;

require('dotenv').config();

appServer.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
