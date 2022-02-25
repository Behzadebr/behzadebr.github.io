const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", function (req, res) {
  let url =
    "https://api.themoviedb.org/3/tv/popular?api_key=8503097d18d6794e437171a015931d54&language=enUS&page=1";
  axios
    .get(url)
    .then((populartv) => {
      res.json(populartv.data.results);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
