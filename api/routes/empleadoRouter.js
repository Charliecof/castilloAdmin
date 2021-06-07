const express = require("express");
const router = express.Router();
const empleadoController = require("../controllers/empleadoController");

router.get("/", empleadoController.getEmpleados);
router.get("/:id", empleadoController.getById);

router.post("/", empleadoController.postEmpleados);

module.exports = router;
