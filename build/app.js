"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _mongoDBConfig = _interopRequireDefault(require("./database/mongoDBConfig"));

var _routes = _interopRequireDefault(require("./routes"));

var _errorHandling = _interopRequireDefault(require("./middlewares/errorHandling"));

var _requestTracking = _interopRequireDefault(require("./middlewares/requestTracking"));

var _resourceNotFound = _interopRequireDefault(require("./middlewares/resourceNotFound"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const app = (0, _express.default)();
(0, _mongoDBConfig.default)();
app.use(_express.default.json());
app.use((0, _cors.default)()); // Middlewares

app.use(_requestTracking.default);
app.use('/api', _routes.default);
app.use(_errorHandling.default);
app.use(_resourceNotFound.default);
app.listen(process.env.PORT, () => {
  console.log(`App connected to PORT ${process.env.PORT}`);
});