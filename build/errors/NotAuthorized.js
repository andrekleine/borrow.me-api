"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class NotAuthorized extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.status = 401;
  }

}

var _default = NotAuthorized;
exports.default = _default;