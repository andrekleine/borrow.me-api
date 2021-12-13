"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class InvalidCredentials extends Error {
  constructor() {
    super();
    this.message = 'Invalid e-mail or password.';
    this.status = 400;
  }

}

var _default = InvalidCredentials;
exports.default = _default;