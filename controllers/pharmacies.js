const db = require("../config/db");

exports.getAllPharmacies = (req, res) => {
  db.query("SELECT * FROM pharmacies", (error, results, field) => {
    if (error) {
      console.log("Error retrieving pharmacies");
      return res.status(500).json({ error: "Internal Sysytem Error" });
    }
    res.json(results);
  });
};

exports.getPharmacyById = (req, res) => {
  pharmacyId = req.params.id;
  db.query(
    "SELECT * FROM pharmacies WHERE id=?",
    [pharmacyId],
    (error, results) => {
      if (error) {
        console.log("Error retrieving pharmacies");
        return res.status(500).json({ error: "Internal Sysytem Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: " Pharmacy not found" });
      }
      res.json(results[0]);
    }
  );
};

exports.createPharmacy = (req, res) => {
  const { name, address, location, phone, email, region_id, district_id } =
    req.body;
  db.query(
    "INSERT INTO pharmacies (name, address, location, phone, email, region_id, district_id) VALUES(?,?,?,?,?,?,?)",
    [name, address, location, phone, email, region_id, district_id],
    (error) => {
      if (error) {
        console.log("Error retrieving pharmacies");
        return res.status(500).json({ error: "Internal Sysytem Error" });
      }
      res.json({
        message: "Pharmacy created successfully",
      });
    }
  );
};

exports.updatePharmacy = (req, res) => {
  const { name, address, location, phone, email, region_id, district_id } =
    req.body;
  const pharmacyId = req.params.id;
  db.query(
    "UPDATE pharmacies SET name=?, address=?, location=?, phone=?, email=?, region_id=?, district_id=? WHERE id=?",
    [name, address, location, phone, email, region_id, district_id, pharmacyId],
    (error) => {
      if (error) {
        console.log("Error retrieving pharmacies");
        return res.status(500).json({ error: "Internal Sysytem Error" });
      }
      res.json({
        message: "Pharmacy updated successfully",
      });
    }
  );
};

exports.deletePharmacy = (req, res) => {
  const pharmacyId = req.params.id;
  db.query("DELETE FROM pharmacies WHERE id=?", [pharmacyId], (error) => {
    if (error) {
      console.log("Error deleting pharmacies");
      return res.status(500).json({ error: "Internal Sysytem Error" });
    }
    res.json({
      message: "Pharmacy deleted successfully",
    });
  });
};
