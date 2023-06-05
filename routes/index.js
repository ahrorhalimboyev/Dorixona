const express = require("express");
const router = express.Router();

const pharmaciesRoutes = require("./pharmacies");
const medicinesRoutes = require("./medicines");
const stockRoutes = require("./stock");
const districtRoutes = require("./district");
const regionRoutes = require("./region");
const medicineidRoutes = require("./medicine_id");

router.use("/pharmacies", pharmaciesRoutes);
router.use("/medicines", medicinesRoutes);
router.use("/stock", stockRoutes);
router.use("/districts", districtRoutes);
router.use("/regions", regionRoutes);
router.use("/medicineid", medicineidRoutes);

module.exports = router;
