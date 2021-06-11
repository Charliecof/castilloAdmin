const express = require("express");

const router = express();
const autController = require("../controllers/authController");

router.post("/signup", autController.signup);

router.post("/login", autController.login);

module.exports = router;
