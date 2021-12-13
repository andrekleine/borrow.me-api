"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyLoginToken = exports.generateLoginToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generateLoginToken = payload => _jsonwebtoken.default.sign(payload, process.env.LOGIN_TOKEN_SECRET, {
  expiresIn: process.env.LOGIN_TOKEN_EXPIRATION
});

exports.generateLoginToken = generateLoginToken;

const verifyLoginToken = token => _jsonwebtoken.default.verify(token, process.env.LOGIN_TOKEN_SECRET);

exports.verifyLoginToken = verifyLoginToken;