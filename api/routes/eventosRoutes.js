const express = require("express");
const router = express.Router();
const eventosController = require("../controllers/eventosController");

router.get("/", eventosController.getEventos);
router.get("/:id", eventosController.getById);

router.post("/", eventosController.postEventos);

module.exports = router;
