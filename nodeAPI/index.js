// importing modules
const express = require("express");
const path = require("path");
const db = require("./dbconn");
const cors = require("cors");
const bodyparser = require("body-parser");

// express app
const app = express();

// create a router
const router = express.Router();

// port
const port = parseInt(process.env.port) || 4000;

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
router.get("^/$|/nodeAPI", (res, req) => {
  res.header("Access-Control-Allow-Origin", "*");
  // query
  const strQuery = `
  SELECT d.id, CONCAT(d.firstname,'',d.lastname) 'Doctor Fullname',
  d.dentistAge,
  d.contactNumb, d.practiceNumb, CONCAT(p.firstname,'',p.lastname)
  'Patient Fullname',
  p.paymentMethods, p.medicalAid
  FROM dentist d
  INNER JOIN patiets p
  ON d.id - p.dentistid;
    `;
  db.query(strQuery, (err, data) => {
    if (err) throw err;
  });
});
