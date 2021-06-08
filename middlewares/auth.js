var responses = require("../utilities/responses");
var db = require("../database");

function verifyToken(token, req, res, next) {
  var query = `
    SELECT
        authtoken_token.key,
        authtoken_token.created as key_created_at,
        accounts_user.id as id,
        accounts_user.last_login,
        accounts_user.is_superuser,
        accounts_user.email,
        accounts_user.first_name,
        accounts_user.last_name,
        accounts_user.date_joined,
        accounts_user.is_active,
        accounts_user.organisation,
        accounts_user.phone,
        accounts_user.is_staff,
        accounts_user.role_id,
        accounts_user.is_sales_person
        FROM   authtoken_token
            INNER JOIN accounts_user
                    ON ( authtoken_token.user_id = accounts_user.id )
        WHERE  authtoken_token.key = '${token}'
        LIMIT  1;`;

  db.conn.query(query, function (err, result, fields) {
    if (err) return responses.error(res, err);
    else if (!result.length)
      return responses.error(res, { authorization: "invalid token" });
    req.user = result[0];
    req.isAuthenticated = true;
    next();
  });
}

function authTokenMiddleware(req, res, next) {
  var authorization = req.headers.authorization;
  if (authorization) {
    var tokenArray = authorization.split(" ").slice(1, 2);
    if (tokenArray && tokenArray.length) {
      verifyToken(tokenArray[0], req, res, next);
    } else {
      responses.error(res, { authorization: "invalid token" });
    }
  } else {
    responses.error(res, { authorization: "token not passed" });
  }
}

module.exports = authTokenMiddleware;
