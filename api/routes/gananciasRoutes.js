const express = require("express");
const router = express.Router();
const gananciaController = require("../controllers/gananciaController");
router.post("/", gananciaController.getGanancias);

module.exports = router;
