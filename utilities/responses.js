exports.error = function (res, error) {
  res.statusCode = 400;
  res.json({
    msg: "Unsuccessfull Request",
    error: error,
  });
};

exports.success = function (res, result) {
  res.statusCode = 200;
  res.json({
    msg: "Successfull Request",
    result: result,
  });
};
