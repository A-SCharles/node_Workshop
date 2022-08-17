const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const con = require("../config/dbcon");

router.get("/", (req, res) => {
  try {
    const strQry = `SELECT * FROM animes`;

    con.query(strQry, (err, results) => {
      if (err) throw err;

      res.json({
        results: results,
        msg: "Pulled Data",
      });
    });
  } catch (error) {
    res.status(400).json({ error });
    console.log(error);
  }
});

router.get("/:id", (req, res) => {
  try {
    const strQry = `SELECT * FROM animes WHERE id = ${req.params.id}`;

    con.query(strQry, (err, results) => {
      if (err) throw err;
      res.json({
        results: results,
        msg: "Pulled Single Data",
      });
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post("/", bodyparser.json(), (req, res) => {
  try {
    const strQry = `INSERT INTO animes (title, alternate, description, logo, gif, descimage, episodes, seasons, gorelevel, genre, trailer, studio, status) VALUES (?, ?, ?, ?, ?,?, ?, ?, ?, ?,?, ?, ?);`;

    const anime = {
      title: req.body.title,
      alternate: req.body.alternate,
      description: req.body.description,
      logo: req.body.logo,
      gif: req.body.gif,
      descimage: req.body.descimage,
      episodes: req.body.episodes,
      seasons: req.body.seasons,
      gorelevel: req.body.gorelevel,
      genre: req.body.genre,
      trailer: req.body.trailer,
      studio: req.body.studio,
      status: req.body.status,
    };

    con.query(
      strQry,
      [
        anime.title,
        anime.alternate,
        anime.description,
        anime.logo,
        anime.gif,
        anime.descimage,
        anime.episodes,
        anime.seasons,
        anime.gorelevel,
        anime.genre,
        anime.trailer,
        anime.studio,
        anime.status,
      ],
      (err, results) => {
        if (err) throw err;

        res.json({
          results: results,
          msg: "Added",
        });
      }
    );
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.put("/:id", (req, res) => {
  try {
    const strQry = ``
  } catch (error) {
    res.status(400).json({error})
  }
})

router.delete("/:id", (req, res) => {
  try {
    const strQry = `DELETE FROM animes WHERE id = ${req.params.id};`;
    
    con.query(strQry, (err, results) => {
      if (err) throw err; 
      res.json({
        results: results,
        msg: "Item Deleted"
      })
    })
  } catch (error) {
    res.status(400).json({error})
  }
})
module.exports = router;