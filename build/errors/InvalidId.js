"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class InvalidId extends Error {
  constructor() {
    super();
    this.message = 'Invalid Id informed';
    this.status = 400;
  }

}

var _default = InvalidId;
exports.default = _default;