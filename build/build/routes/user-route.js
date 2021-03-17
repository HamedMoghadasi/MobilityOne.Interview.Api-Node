"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _userController = _interopRequireDefault(require("../controllers/user-controller"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var router = (0, _express.Router)();
router.get("/", _userController["default"].getAll);
router.get("/:id", _userController["default"].getById);
router.post("/", _userController["default"].add);
router.put("/", _userController["default"].update);
router["delete"]("/:id", _userController["default"]["delete"]);
var _default = router;
exports["default"] = _default;