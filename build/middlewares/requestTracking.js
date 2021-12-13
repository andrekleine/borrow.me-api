"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const requestTrackMiddleware = (req, res, next) => {
  console.log(`Receiving ${req.method} request to route ${req.path}`);
  next();
};

var _default = requestTrackMiddleware;
exports.default = _default;