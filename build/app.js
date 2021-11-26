"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.get("/", (req, res) => res.json({
  message: "Hello borrow.me API!"
}));
app.listen(5000, () => console.log("App connected to port 5000"));