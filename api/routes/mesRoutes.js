const express = require("express");
const router = express.Router();
const mesController = require("../controllers/mesController");

router.get("/", mesController.getMes);
router.get("/:id", mesController.getById);

router.post("/", mesController.postMes);

module.exports = router;
