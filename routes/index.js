var express = require("express");
var router = express.Router();
var apiRouter = require("./api");

router.get("/", function (req, res, next) {
  res.send("<p>Welcome. To access APIs please hit <a href='/api/'>/api/</a> end point</p>");
});

router.use("/api", apiRouter);

module.exports = router;
