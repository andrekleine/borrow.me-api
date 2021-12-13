"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class UserAlreadyExists extends Error {
  constructor() {
    super();
    this.message = 'E-mail already registered.';
    this.status = 400;
  }

}

var _default = UserAlreadyExists;
exports.default = _default;