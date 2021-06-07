const express = require("express");
const router = express.Router();
const pagosController = require("../controllers/pagosController");

router.get("/", pagosController.getPagos);
router.get("/:id", pagosController.getById);

router.post("/", pagosController.postPagos);

module.exports = router;
