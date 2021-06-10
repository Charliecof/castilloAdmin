const express = require("express");
const router = express.Router();
const paquetesController = require("../controllers/paquetesController");

router.get("/", paquetesController.getPaquetes);

router.get("/:id", paquetesController.getById);

router.post("/", paquetesController.postPaquete);

router.patch("/", paquetesController.patchPaquete);

module.exports = router;
