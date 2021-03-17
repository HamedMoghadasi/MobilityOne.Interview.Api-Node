"use strict";

var _express = _interopRequireDefault(require("express"));

var _userRoute = _interopRequireDefault(require("./routes/user-route"));

var _cors = _interopRequireDefault(require("cors"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT;
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use("/api/users", _userRoute["default"]);
app.listen(port, function () {
  console.log("server listening at http://localhost:".concat(port));
});