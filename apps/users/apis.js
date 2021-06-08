var qurry = require("../../utilities/qurry");

exports.users = function (req, res, next) {
  
  var Q = `select id, first_name, last_name from accounts_user;`;

  qurry.run(Q, req, res, next);
};
