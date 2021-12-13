"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var _InvalidId = _interopRequireDefault(require("../errors/InvalidId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const validateId = id => {
  const isValid = (0, _mongoose.isValidObjectId)(id);

  if (!isValid) {
    throw new _InvalidId.default();
  }
};

var _default = validateId;
exports.default = _default;