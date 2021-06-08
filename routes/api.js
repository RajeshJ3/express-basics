var express = require("express");
var router = express.Router();
var v1Router = require("./v1");
var v2Router = require("./v2");

router.get("/", function (req, res, next) {
  res.send(`
  <p>This project servers multiple versions of APIs</p>
  <ul>
    <li><a href='/api/v1'>/api/v1</a></li>
    <li><a href='/api/v2'>/api/v2</a></li>
  </ul>
  `);
});

router.use("/v1", v1Router);
router.use("/v2", v2Router);

module.exports = router;
