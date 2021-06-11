const express = require("express");
const router = express.Router();
const serviciosController = require("../controllers/serviciosController");

router.get("/", serviciosController.getServicios);
router.get("/:id", serviciosController.getById);

router.post("/", serviciosController.postServicios);

module.exports = router;
