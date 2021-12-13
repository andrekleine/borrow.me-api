"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class AuthRepository {
  constructor(Model) {
    this.Model = Model;
  }

  async findUserByEmail(email) {
    const foundUser = await this.Model.findOne({
      email
    });
    return foundUser;
  }

  async saveUser(newUser) {
    const savedUser = await this.Model.create(newUser);
    return savedUser;
  }

}

var _default = AuthRepository;
exports.default = _default;