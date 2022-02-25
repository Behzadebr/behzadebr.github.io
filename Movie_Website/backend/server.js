var express = require("express");
const cors = require("cors");
const path = require("path");
var posts = require("./routes/posts");
var popularmv = require("./routes/popularmv");
var topmv = require("./routes/topmv");
var trendmv = require("./routes/trendmv");
var populartv = require("./routes/populartv");
var toptv = require("./routes/toptv");
var trendtv = require("./routes/trendtv");
var multisearch = require("./routes/multisearch");
var mvdetails = require("./routes/mvdetails");
var tvdetails = require("./routes/tvdetails");
var mvvideo = require("./routes/mvvideo");
var tvvideo = require("./routes/tvvideo");
var mvcast = require("./routes/mvcast");
var tvcast = require("./routes/tvcast");
var mvreviews = require("./routes/mvreviews");
var tvreviews = require("./routes/tvreviews");
var mvrecom = require("./routes/mvrecom");
var tvrecom = require("./routes/tvrecom");
var mvsimilar = require("./routes/mvsimilar");
var tvsimilar = require("./routes/tvsimilar");
var castdetails = require("./routes/castdetails");
var moredetails = require("./routes/moredetails");

var app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, "dist/frontend")));

app.use("/apis/posts", posts);
app.use("/apis/popularmv", popularmv);
app.use("/apis/topmv", topmv);
app.use("/apis/trendmv", trendmv);
app.use("/apis/populartv", populartv);
app.use("/apis/toptv", toptv);
app.use("/apis/trendtv", trendtv);
app.use("/apis/multisearch", multisearch);
app.use("/apis/mvdetails", mvdetails);
app.use("/apis/tvdetails", tvdetails);
app.use("/apis/mvvideo", mvvideo);
app.use("/apis/tvvideo", tvvideo);
app.use("/apis/mvcast", mvcast);
app.use("/apis/tvcast", tvcast);
app.use("/apis/mvreviews", mvreviews);
app.use("/apis/tvreviews", tvreviews);
app.use("/apis/mvrecom", mvrecom);
app.use("/apis/tvrecom", tvrecom);
app.use("/apis/mvsimilar", mvsimilar);
app.use("/apis/tvsimilar", tvsimilar);
app.use("/apis/castdetails", castdetails);
app.use("/apis/moredetails", moredetails);

app.use("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist/frontend/index.html"));
});

app.listen(8080, function () {
  console.log("Backend Application listening at http://localhost:8080");
});

module.exports = app;
