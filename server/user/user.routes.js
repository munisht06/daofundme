const express = require("express");
const { requiresAuth } = require("express-openid-connect");

const router = express.Router();

// Get User Profile
router.get("/profile", requiresAuth(), (req, res) => {
  res.send(req.oidc.user);
});

module.exports = router;
