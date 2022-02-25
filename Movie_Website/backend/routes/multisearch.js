const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/:term", function (req, res) {
  let term = req.params.term;

  let url =
    "https://api.themoviedb.org/3/search/multi?api_key=8503097d18d6794e437171a015931d54&language=en-US&query=" +
    term;
  axios
    .get(url)
    .then((multisearch) => {
      res.json(multisearch.data.results.slice(0, 7));
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
