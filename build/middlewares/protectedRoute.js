"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _NotAuthorized = _interopRequireDefault(require("../errors/NotAuthorized"));

var _jwt = require("../utils/jwt");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const protectedRoute = (req, res, next) => {
  try {
    const bearerToken = req.get('Authorization');

    if (!bearerToken) {
      throw new _NotAuthorized.default('Missing token');
    }

    try {
      const token = bearerToken.slice(7);
      const tokenInfo = (0, _jwt.verifyLoginToken)(token); // Insert user info inside request

      req.user = {
        id: tokenInfo.id,
        role: tokenInfo.role
      };
      next();
    } catch (error) {
      throw new _NotAuthorized.default('Invalid or expired token');
    }
  } catch (error) {
    next(error);
  }
};

var _default = protectedRoute;
exports.default = _default;