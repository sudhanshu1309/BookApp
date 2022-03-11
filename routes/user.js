const express = require("express");
const router = express.Router();
const { getReward } = require("../controllers/user");

router.get("/reward", getReward);

module.exports = router;
