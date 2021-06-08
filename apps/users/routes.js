var express = require("express");
var router = express.Router();
var api = require("./apis")

router.get("", api.users);

module.exports = router;
