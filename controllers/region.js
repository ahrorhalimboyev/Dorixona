const db = require("../config/db");

exports.getAllRegions = (req, res) => {
  db.query("SELECT * FROM region", (error, results) => {
    if (error) {
      console.log("Error retrieving region");
      res.status(500).json({ error: "Internal System Error" });
    }
    res.json(results);
  });
};

exports.getRegionsById = (req, res) => {
  const regionId = req.params.id;
  db.query("SELECT * FROM region WHERE id=?", [regionId], (error, results) => {
    if (error) {
      console.log("Error retrieving region");
      res.status(500).json({ error: "Internal System Error" });
    }
    res.json(results);
  });
};

exports.createRegion = (req, res) => {
  const { id, name } = req.body;
  db.query("INSERT INTO region (id,name) VALUES(?,?)", [id, name], (error) => {
    if (error) {
      console.log("Error creating region");
      res.status(500).json({ error: "Internal System Error" });
    }
    res.json({
      message: "Region created successfully",
    });
  });
};

exports.updateRegion = (req, res) => {
  const { name } = req.body;
  const regionId = req.params.id;
  db.query(
    "UPDATE region SET id=?, name=? WHERE id=?",
    [regionId, name, regionId],
    (error, results) => {
      if (error) {
        console.log("Error updating region");
        res.status(500).json({ error: "Internal System Errror" });
      }
      res.json({
        message: "Region updated succesfully",
      });
    }
  );
};

exports.deleteRegion = (req, res) => {
  const regionId = req.params.id;
  db.query("DELETE from region WHERE id=?", [regionId], (error, results) => {
    if (error) {
      console.log("Error deleting region");
      res.status(500).json({ error: "Internal System Error" });
    }
    res.json({
      message: "Region deleted successfully",
    });
  });
};
