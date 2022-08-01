// importing modules
const express = require("express");
const path = require("path");
const db = require("./dbconn");
const cors = require("cors");
const bodyparser = require("body-parser");
require("dotenv").config()
// express app
const app = express();

// create a router
const router = express.Router();

// port
const port = parseInt(process.env.PORT);
console.log(port)
// express.json(): middleware
app.use(
  router,
  cors(),
  express.json(),
  express.urlencoded({
    extended: true,
  })
);

app.listen(port),
  () => {
    console.log(`server is running on port ${port}`);
  };

// fetch data
// router.get("/", (res, req) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   // query
//   const strQuery = `
//   SELECT d.id, CONCAT(d.firstname,'',d.lastname) 'Doctor Fullname',
//   d.dentistAge,
//   d.contactNumb, CONCAT(p.firstname,'',p.lastname)
//   'Patient Fullname',
//   p.paymentMethods, p.medicalAid
//   FROM dentist d
//   INNER JOIN patients p
//   ON d.id - p.dentistid;
//     `;
//   db.query(strQuery, (err, data) => {
//     if (err) throw err;
//   });
// });
router.get("^/$|/nodeAPI", (res, req) => {
  res.header("Access-Control-Allow-Origin", "*");
  // query
  const strQuery = `
  SELECT d.id, CONCAT(d.firstname,'',d.lastname) 'Doctor Fullname',
  d.dentistAge,
  d.contactNumb, CONCAT(p.firstname,'',p.lastname)
  'Patient Fullname',
  p.paymentMethods, p.medicalAid
  FROM dentist d
  INNER JOIN patients p
  ON d.id - p.dentistid;
    `;
  db.query(strQuery, (err, data) => {
    if (err) throw err;
  });
});

// router.post('/products', bodyparser.json(), (req, res) => {
//   const bd = req.body

//   bd.totalamount = bd.quantity * bd.price

//   const strQuery = 
//   `
//   INSERT INTO products(prodName, prodUrl, quantity, price, totalamount, dateCreated)
//     VALUES(?, ?, ?, ?, ?, ?);
//   `

//   db.query(strQuery, [bd.prodName, bd.prodUrl, bd.quantity, bd.quantity, bd.price, bd.dateCreated])  
// })
