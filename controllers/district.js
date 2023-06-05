const db = require("../config/db");

exports.getAllDistricts = (req, res) => {
  db.query("SELECT * FROM district", (error, results) => {
    if (error) {
      console.log("Error retrieving distric");
      res.status(500).json({ error: "Internal Service Error" });
    }
    res.json(results);
  });
};

exports.getDistrictById = (req, res) => {
  districtId = req.params.id;
  db.query(
    "SELECT * FROM district WHERE id=?",
    [districtId],
    (error, results) => {
      if (error) {
        console.log("Error retrieving district");
        res.status(500).json({ error: "Internal Service Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: " District not found" });
      }
      res.json(results[0]);
    }
  );
};

exports.createDistrict = (req, res) => {
  const { name, region_id } = req.body;
  db.query(
    "INSERT INTO district (name, region_id) VALUES(?,?)",
    [name, region_id],
    (error, results) => {
      if (error) {
        console.log("error retrieving district");
        res.status(500).json({ error: "Internal System Error" });
      }
      res.json({
        message: "District created successfully",
      });
    }
  );
};

exports.updateDistrict = (req, res) => {
  const { name, region_id } = req.body;
  const districtId = req.params.id;
  db.query(
    "UPDATE district SET name=?, region_id=? WHERE id=?",
    [name, region_id, districtId],
    (error) => {
      if (error) {
        console.log("Error updating district");
        res.status(500).json({ error: "Internal System Error" });
      }
      res.json({
        message: "Disctrict updated successfully",
      });
    }
  );
};

exports.deleteDistrict = (req, res) => {
  const districtId = req.params.id;
  db.query("DELETE from district WHERE id=?", [districtId], (error) => {
    if (error) {
      console.log("Error deleting district");
      res.status(500).json({ error: "Internal System Error" });
    }
    res.json({
      message: "District deleted successfully",
    });
  });
};
