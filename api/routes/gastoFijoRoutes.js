const express = require("express");
const router = express.Router();
const gastoFijoController = require("../controllers/gastoFijoController");

router.get("/", gastoFijoController.getGastoFijo);
router.get("/:id", gastoFijoController.getById);

router.post("/", gastoFijoController.postGastoFijo);

module.exports = router;
