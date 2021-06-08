var express = require("express");
var router = express.Router();
var userRouter = require("../apps/users/routes");


router.get("/", function (req, res, next) {
  res.send(`
    <p>This project version of API serves multiple apps</p>
    <ul>
      <li><a href='/api/v1/users'>/api/v1/users</a></li>
      <li><a href='/api/v1/leads'>/api/v1/leads</a></li>
    </ul>
  `);
});

router.use("/users", userRouter);

module.exports = router;
