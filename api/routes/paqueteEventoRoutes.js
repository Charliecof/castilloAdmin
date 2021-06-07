const express = require("express");
const router = express.Router();
const paqueteEventoController = require("../controllers/paqueteEventoController");

router.get("/", paqueteEventoController.getPaqueteEvento);
router.get("/:id", paqueteEventoController.getById);

router.post("/", paqueteEventoController.postPaqueteEvento);

module.exports = router;
