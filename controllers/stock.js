const db = require("../config/db");

exports.getAllStock = (req, res) => {
  db.query("SELECT * FROM stock", (error, results, field) => {
    if (error) {
      console.log("Error retrieving stock");
      return res.status(500).json({ error: "Internal Sysytem Error" });
    }
    res.json(results);
  });
};

exports.getAllStockById = (req, res) => {
  stockId = req.params.id;
  db.query("SELECT * FROM stock WHERE id=?", [stockId], (error, results) => {
    if (error) {
      console.log("Error retrieving stock");
      return res.status(500).json({ error: "Internal Sysytem Error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: " Stock not found" });
    }
    res.json(results[0]);
  });
};

exports.createStock = (req, res) => {
  const { medicine_id, pharmacy_id, quantity } = req.body;
  db.query(
    "INSERT INTO stock (medicine_id, pharmacy_id, quantity) VALUES(?,?,?)",
    [medicine_id, pharmacy_id, quantity],
    (error) => {
      if (error) {
        console.log("Error retrieving stock");
        return res.status(500).json({ error: "Internal Sysytem Error" });
      }
      res.json({
        message: "Pharmacy created successfully",
      });
    }
  );
};

exports.updateStock = (req, res) => {
  const { medicine_id, pharmacy_id, quantity } = req.body;
  const stockId = req.params.id;
  db.query(
    "UPDATE stock SET medicine_id=?, pharmacy_id=?, quantity=? WHERE id=?",
    [medicine_id, pharmacy_id, quantity, stockId],
    (error) => {
      if (error) {
        console.log("Error retrieving stock");
        return res.status(500).json({ error: "Internal Sysytem Error" });
      }
      res.json({
        message: "Stock updated successfully",
      });
    }
  );
};

exports.deleteStock = (req, res) => {
  const stockId = req.params.id;
  db.query("DELETE FROM stock WHERE id=?", [stockId], (error) => {
    if (error) {
      console.log("Error deleting stock");
      return res.status(500).json({ error: "Internal Sysytem Error" });
    }
    res.json({
      message: "Stock deleted successfully",
    });
  });
};
