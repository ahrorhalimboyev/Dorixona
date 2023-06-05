const express = require("express");
const router = express.Router();
const medicineController = require("../controllers/medicines");

router.get("/", medicineController.getAllMedicines);
router.get("/:id", medicineController.getAllMedicinesById);
router.post("/", medicineController.createMedicine);
router.put("/:id", medicineController.updateMedicine);
router.delete("/:id", medicineController.deleteMedicine);

module.exports = router;
