const express = require("express");
const router = express.Router();
const stockController = require("../controllers/stock");

router.get("/", stockController.getAllStock);
router.get("/:id", stockController.getAllStockById);
router.post("/", stockController.createStock);
router.put("/:id", stockController.updateStock);
router.delete("/:id", stockController.deleteStock);

module.exports = router;
