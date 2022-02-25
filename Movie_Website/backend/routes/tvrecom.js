const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/:id", function (req, res) {
  let id = req.params.id;

  let url =
    "https://api.themoviedb.org/3/tv/" +
    id +
    "/recommendations?api_key=8503097d18d6794e437171a015931d54&language=en-US&page=1";
  axios
    .get(url)
    .then((tvrecom) => {
      res.json(tvrecom.data.results);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
