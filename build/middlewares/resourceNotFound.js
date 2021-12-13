"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const resourceNotFoundMiddleware = (req, res) => {
  res.status(404).json({
    message: `Resource ${req.method} to '${req.path}' not found.`
  });
};

var _default = resourceNotFoundMiddleware;
exports.default = _default;