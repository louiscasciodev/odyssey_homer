const express = require("express")
// const connection = require('../../conf')

const router = express.Router()

router.get('/', (req, res) => {
  res.send("je suis sur la route /auth ").status(200)
})

router.post('/signup', (req, res, next) => {
  res.send('I am in POST signup');
});

module.exports = router