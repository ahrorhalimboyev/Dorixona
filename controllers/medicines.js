const db = require("../config/db");

exports.getAllMedicines = (req, res) => {
  db.query("SELECT * FROM medicines", (error, results, field) => {
    if (error) {
      console.log("Error retrieving medicines");
      return res.status(500).json({ error: "Internal Sysytem Error" });
    }
    res.json(results);
  });
};

exports.getAllMedicinesById = (req, res) => {
  medicineId = req.params.id;
  db.query(
    "SELECT * FROM medicines WHERE id=?",
    [medicineId],
    (error, results) => {
      if (error) {
        console.log("Error retrieving medicines");
        return res.status(500).json({ error: "Internal Sysytem Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: " Medicine not found" });
      }
      res.json(results[0]);
    }
  );
};

exports.createMedicine = (req, res) => {
  const { name, manufacturer, medicine_type_id, price, expiry_date, info } =
    req.body;
  db.query(
    "INSERT INTO medicines (name, manufacturer, medicine_type_id, price, expiry_date, info) VALUES(?,?,?,?,?,?)",
    [name, manufacturer, medicine_type_id, price, expiry_date, info],
    (error) => {
      if (error) {
        console.log("Error retrieving medicine");
        return res.status(500).json({ error: "Internal Sysytem Error" });
      }
      res.json({
        message: "Medicine created successfully",
      });
    }
  );
};

exports.updateMedicine = (req, res) => {
  const { name, manufacturer, medicine_type_id, price, expiry_date, info } =
    req.body;
  const medicineId = req.params.id;
  db.query(
    "UPDATE medicines SET name=?, manufacturer=?, medicine_type_id=?, price=?, expiry_date=?, info=? WHERE id=?",
    [
      name,
      manufacturer,
      medicine_type_id,
      price,
      expiry_date,
      info,
      medicineId,
    ],
    (error) => {
      if (error) {
        console.log("Error retrieving medicines");
        return res.status(500).json({ error: "Internal Sysytem Error" });
      }
      res.json({
        message: "Medicine updated successfully",
      });
    }
  );
};

exports.deleteMedicine = (req, res) => {
  const medicineId = req.params.id;
  db.query("DELETE FROM medicines WHERE id=?", [medicineId], (error) => {
    if (error) {
      console.log("Error deleting medicine");
      return res.status(500).json({ error: "Internal Sysytem Error" });
    }
    res.json({
      message: "Medicine deleted successfully",
    });
  });
};
