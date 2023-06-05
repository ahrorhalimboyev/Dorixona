const express = require("express");
const router = express.Router();
const pharmaciesController = require("../controllers/pharmacies");

router.get("/", pharmaciesController.getAllPharmacies);
router.get("/:id", pharmaciesController.getAllPharmacies);
router.post("/", pharmaciesController.createPharmacy);
router.put("/:id", pharmaciesController.updatePharmacy);
router.delete("/:id", pharmaciesController.deletePharmacy);

module.exports = router;
