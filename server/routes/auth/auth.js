const express = require("express")
const connection = require('../../helpers/db')

const router = express.Router()

router.get('/', (req, res) => {
  res.send("je suis sur la route /auth ").status(200)
})

router.get('/all', (req, res, next) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des users");
    } else {
      res.json(results);
    }
  })
});

router.post('/signup', (req, res, next) => {
  const formData = req.body;
  connection.query('INSERT INTO users SET ?', formData, (err, results) => {
    if (err)
      res.json({ flash: err.message }).status(500);
    else
      res.json({ flash: "User has been signed up !" }).status(200);
  })
});

module.exports = router