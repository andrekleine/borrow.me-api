"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const errorHandlingMiddleware = (err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).json({
    message: err.message || 'A problem ocurred. Try again later'
  });
};

var _default = errorHandlingMiddleware;
exports.default = _default;