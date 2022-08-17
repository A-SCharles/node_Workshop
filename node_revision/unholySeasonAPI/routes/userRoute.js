const app = require("express");
const router = app.Router();
const con =  require('../config/dbcon')

router.get("/products", (req, res) => {
  const strQry = `SELECT * FROM products`;

  con.query(strQry, (err, results) => {
    if (err) throw err;

    res.json({

    });
  });
});

module.exports = router 
