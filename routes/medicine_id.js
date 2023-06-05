const express = require("express");
const router = express.Router();
const medicineidController = require("../controllers/medicine_id");

// router.get("/", medicineidController.getAllMedicineId);
// router.get("/:id", medicineidController.getMedicineById);
// router.post("/", medicineidController.createMedicine);
// router.put("/:id", medicineidController.updateMedicine_id);
// router.delete("/:id", medicineidController.deleteMedicine_id);

router.get("/:name", medicineidController.superSearch);

module.exports = router;
