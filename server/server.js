const express = require("express");
const { auth0 } = require("./config/index");
const cors = require("cors");

const app = express();

// Use auth0 configuration
app.use(auth0);
// Use cors 
app.use(cors());

// Testing auth0
app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log(req.oidc.isAuthenticated());
});

module.exports = app;
