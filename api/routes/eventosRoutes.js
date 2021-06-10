const express = require("express");
const router = express.Router();
const eventosController = require("../controllers/eventosController");

router.get("/", eventosController.getEventos);
router.get("/:id", eventosController.getById);

router.patch("/:id", eventosController.patchEventos);

router.delete("/:id", eventosController.deleteEventos);

router.post("/", eventosController.postEventos);

module.exports = router;
