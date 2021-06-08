var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send(`
    <p>This project version of API serves multiple apps</p>
    <ul>
      <li><a href='/api/v2/users'>/api/v2/users</a></li>
      <li><a href='/api/v2/leads'>/api/v2/leads</a></li>
    </ul>
  `);
});

module.exports = router;
