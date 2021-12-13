"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcrypt = require("../utils/bcrypt");

var _UserAlreadyExists = _interopRequireDefault(require("../errors/UserAlreadyExists"));

var _InvalidCredentials = _interopRequireDefault(require("../errors/InvalidCredentials"));

var _jwt = require("../utils/jwt");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthService {
  constructor(authRepository) {
    this.authRepository = authRepository;
  }

  async register(body) {
    await body.validate();
    const foundUser = await this.authRepository.findUserByEmail(body.email);

    if (foundUser) {
      throw new _UserAlreadyExists.default();
    }

    const encryptedPassword = (0, _bcrypt.generateHash)(body.password, 10);
    const newUser = { ...body,
      password: encryptedPassword
    };
    const savedUser = await this.authRepository.saveUser(newUser);
    return {
      id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email
    };
  }

  async login(body) {
    await body.validate();
    const foundUser = await this.authRepository.findUserByEmail(body.email);

    if (!foundUser) {
      throw new _InvalidCredentials.default();
    }

    const doesPasswordMatch = (0, _bcrypt.compareHash)(body.password, foundUser.password);

    if (!doesPasswordMatch) {
      throw new _InvalidCredentials.default();
    }

    const token = (0, _jwt.generateLoginToken)({
      id: foundUser._id,
      role: foundUser.role
    });
    return {
      token,
      role: foundUser.role
    };
  }

}

var _default = AuthService;
exports.default = _default;