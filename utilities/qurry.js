var db = require("../database");
var responses = require("./responses");

exports.run = function (query, req, res, next) {
  db.conn.query(query, function (err, result, fields) {
    if (err) return responses.error(res, err);
    return responses.success(res, result);
  });
};
