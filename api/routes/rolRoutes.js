const express = require("express");
const router = express.Router();
const rolController = require("../controllers/rolController");

router.get("/", rolController.getRol);
router.get("/:id", rolController.getById);

router.post("/", rolController.postRol);

module.exports = router;
