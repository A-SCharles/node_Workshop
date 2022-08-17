const app = require("express");
const router = app.Router();
const bodyparser = require("body-parser")
const con = require('../config/dbcon')
const {
  hash,
  compare
} = require("bcrypt")

router.get("/", (req, res) => {
  const strQry = `SELECT * FROM users`;

  con.query(strQry, (err, results) => {
    if (err) throw err;
    res.json({
      results: results,
      msg: "users fetched"
    });
  });
});

router.get("/:id", (req, res) => {
  const strQry = `SELECT * FROM users WHERE id = ${req.params.id}`;

  con.query(strQry, (err, results) => {
    if (err) throw err;
    res.json({
      results: results,
      msg: "single user fetched"
    });
  });
});

//Register 
router.post("/", bodyparser.json(), async (req, res) => {
  try {
  const user = req.body
  if ((user.usertype === "") || (user.usertype === null)) {
    user.usertype = "user"
  }
  let emailCheck = `SELECT * FROM users WHERE email = '${user.email}';`
  con.query(emailCheck, async (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.json({
        msg : "Email already in use"
      })
    } else {
      // adding to db
    const strQry = `INSERT INTO users (username, email, usertype, password) VALUES(?, ?, ?, ?);`;
    user.password = await hash(user.password, 10);
    con.query(strQry, [user.username, user.email, user.usertype, user.password], async (err, results) => {
      if (err) throw err;
      res.json({
        results: results,
        msg: "Registration Successful"
      })
    })
    }
  })
} catch (error) {
 res.status(400).json({error})   
}
})

module.exports = router