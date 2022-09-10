const express = require("express");
const { auth0 } = require("./config/index");
const cors = require("cors");
const userRoute = require("./user/user.routes");

const app = express();

// Use auth0 configuration
app.use(auth0);
// Use cors
app.use(cors());



// Use user routes
app.use("/user", userRoute);
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

module.exports = app;
