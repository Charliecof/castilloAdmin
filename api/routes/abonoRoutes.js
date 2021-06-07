const express = require("express");
const router = express.Router();
const abonoController = require("../controllers/abonoController");

router.get("/", abonoController.getAbono);
router.get("/:id", abonoController.getById);

router.post("/", abonoController.postAbono);

module.exports = router;
