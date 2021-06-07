const express = require("express");
const router = express.Router();
const serviciosEventosController = require("../controllers/serviciosEventosController");

router.get("/", serviciosEventosController.getServiciosEventos);
router.get("/:id", serviciosEventosController.getById);

router.post("/", serviciosEventosController.postServiciosEventos);

module.exports = router;
