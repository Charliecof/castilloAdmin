const express = require("express");
const router = express.Router();
const eventosController = require("../controllers/eventosController");
router.get("/", eventosController.getEventos);

module.exports = router;
