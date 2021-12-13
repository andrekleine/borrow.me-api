"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateHash = exports.compareHash = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generateHash = (password, saltRounds) => _bcryptjs.default.hashSync(password, _bcryptjs.default.genSaltSync(saltRounds));

exports.generateHash = generateHash;

const compareHash = (password, hashPassword) => _bcryptjs.default.compareSync(password, hashPassword);

exports.compareHash = compareHash;