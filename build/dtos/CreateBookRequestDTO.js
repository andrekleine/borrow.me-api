"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var yup = _interopRequireWildcard(require("yup"));

var _schemaValidation = _interopRequireDefault(require("../validation/schemaValidation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class CreateBookRequestDTO {
  constructor({
    title,
    authors,
    description,
    imgLink,
    googleID
  }) {
    this.title = title;
    this.authors = authors;
    this.description = description;
    this.imgLink = imgLink;
    this.googleID = googleID;
    this.schema = yup.object().shape({
      title: yup.string().required().min(3).max(500),
      authors: yup.array().of(yup.string().required().min(3).max(150)).required(),
      description: yup.string().min(3).max(5000),
      imgLink: yup.string().min(5).max(2000),
      googleID: yup.string().required().min(3).max(50)
    });
  }

  async validate() {
    await (0, _schemaValidation.default)(this.schema, {
      title: this.title,
      authors: this.authors,
      description: this.description,
      imgLink: this.imgLink,
      googleID: this.googleID
    });
  }

}

var _default = CreateBookRequestDTO;
exports.default = _default;