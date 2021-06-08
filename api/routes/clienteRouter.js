const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clientesController");

router.get("/", clientesController.getClientes);
router.get("/where", clientesController.getClientesWhere);
router.get("/:id", clientesController.getById);

router.post("/", clientesController.postCliente);

module.exports = router;
