const express = require("express");
const auth0 = require("./auth0");
const cors = require("cors");
const userRoute = require("../user/user.routes");
const fundraiserRoutes = require("../fundraiser/fundraiser.routes");

const app = express();

// Use auth0 configuration
app.use(auth0);

// Use cors
// app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors());

// Use user routes
app.use("/user", userRoute);
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

// Use the Fundraiser Routes
app.use("/fundraiser", fundraiserRoutes);

module.exports = app;
