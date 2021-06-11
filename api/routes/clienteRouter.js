const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clientesController");
const isAuth = require("../middleware/is-auth");
router.get("/", clientesController.getClientes);
router.get("/where", clientesController.getClientesWhere);
router.get("/:id", clientesController.getById);

router.patch("/", clientesController.patchCliente);

router.post("/", clientesController.postCliente);

module.exports = router;
