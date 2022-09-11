require("dotenv").config({ path: require("find-config")(".env") });
const { MongoClient, ServerApiVersion } = require("mongodb");

// Gets the URI from the ENV
const uri = process.env.MONGODB_URI;

// Creates New MongoDB Client
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
