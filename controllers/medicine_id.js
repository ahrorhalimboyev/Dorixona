const db = require("../config/db");

exports.superSearch = (req, res) => {
  const Pname = req.body;
  db.query(
    "SELECT region.name as region, district.name as district FROM region JOIN district ON region.id=district.region_id where Medicines.name=?",
    [Pname],
    (error, results, field) => {
      if (error) {
        console.log("Error retrieving address", error);
        res.status(500).json({ error: "Internal System Error" });
      }
      res.json(results);
    }
  );
};

exports.getAllMedicineId = (req, res) => {
  db.query("SELECT * FROM medicine_id", (error, results, field) => {
    if (error) {
      console.log("Error retrieving medicine_id");
      res.status(500).json({ error: "Internal System Error" });
    }
    res.json(results);
  });
};

exports.getMedicineById = (req, res) => {
  medicine_idId = req.params.id;
  db.query(
    "SELECT * FROM medicine_id WHERE id=?",
    [medicine_idId],
    (error, results) => {
      if (error) {
        console.log("Error retrieving medicine_id");
        res.status(500).json({ error: "Internal System Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: " Medicine_id not found" });
      }
      res.json(results);
    }
  );
};

exports.createMedicine = (req, res) => {
  const { name } = req.body;
  db.query("INSERT INTO medicine_id (name) VALUES(?)", [name], (error) => {
    if (error) {
      console.log("Error retrieving medicine_id");
      return res.status(500).json({ error: "Internal Sysytem Error" });
    }
    res.json({
      message: "Medicine_id created successfully",
    });
  });
};

exports.updateMedicine_id = (req, res) => {
  const { name } = req.body;
  const medicine_idId = req.params.id;
  db.query(
    "UPDATE medicine_id SET name=? WHERE id=?",
    [name, medicine_idId],
    (error) => {
      if (error) {
        console.log("Error retrieving medicine_id");
        return res.status(500).json({ error: "Internal Sysytem Error" });
      }
      res.json({
        message: "Medicine_id updated successfully",
      });
    }
  );
};

exports.deleteMedicine_id = (req, res) => {
  const medicine_idId = req.params.id;
  db.query("DELETE FROM medicine_id WHERE id=?", [medicine_idId], (error) => {
    if (error) {
      console.log("Error deleting medicine_id");
      return res.status(500).json({ error: "Internal Sysytem Error" });
    }
    res.json({
      message: "Medicine_id deleted successfully",
    });
  });
};
