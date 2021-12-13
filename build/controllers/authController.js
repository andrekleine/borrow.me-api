"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _RegisterRequestDTO = _interopRequireDefault(require("../dtos/RegisterRequestDTO"));

var _LoginRequestDTO = _interopRequireDefault(require("../dtos/LoginRequestDTO"));

var _User = _interopRequireDefault(require("../models/User"));

var _authService = _interopRequireDefault(require("../services/authService"));

var _authRepository = _interopRequireDefault(require("../repositories/authRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependency injection
const authService = new _authService.default(new _authRepository.default(_User.default));
const router = (0, _express.Router)(); // Register

router.post('/register', async (req, res, next) => {
  try {
    const body = new _RegisterRequestDTO.default(req.body);
    const userResponse = await authService.register(body);
    res.status(201).json(userResponse);
  } catch (error) {
    next(error);
  }
}); // Log in

router.post('/login', async (req, res, next) => {
  try {
    const body = new _LoginRequestDTO.default(req.body);
    const loginResponse = await authService.login(body);
    res.status(201).json(loginResponse);
  } catch (error) {
    next(error);
  }
});
var _default = router;
exports.default = _default;