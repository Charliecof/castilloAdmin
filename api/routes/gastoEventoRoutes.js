const express = require("express");
const router = express.Router();
const gastoEventoController = require("../controllers/gastoEventoController");

router.get("/", gastoEventoController.getGastoEvento);
router.get("/:id", gastoEventoController.getById);

router.post("/", gastoEventoController.postGastoEvento);

module.exports = router;
