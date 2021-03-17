"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userQueries = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var userQueries = {
  getAll: function getAll() {
    return "SELECT * FROM users";
  },
  getById: function getById(id) {
    return "SELECT * FROM users WHERE Id = ".concat(id);
  },
  add: function add(user) {
    var utcnow = _moment["default"].utc().format("YYYY-MM-DD HH:mm");

    return "INSERT INTO users\n      (name,phoneNumber,emailAddress,password,lastLogin,createDate,suspended)\n      VALUES\n      ('".concat(user.name, "','").concat(user.phoneNumber, "','").concat(user.emailAddress, "','").concat(user.password, "',\n       '").concat(utcnow, "','").concat(utcnow, "',").concat(user.suspended, ");\n       SELECT * FROM users WHERE id = LAST_INSERT_ID()");
  },
  update: function update(user) {
    return "UPDATE users\n    SET\n    name = '".concat(user.name, "',\n    phoneNumber =  '").concat(user.phoneNumber, "',\n    emailAddress = '").concat(user.emailAddress, "',\n    password = '").concat(user.password, "' ,\n    suspended = ").concat(user.suspended, "\n    WHERE id = ").concat(user.id, ";\n    SELECT * FROM users WHERE id = ").concat(user.id, ";\n    ");
  },
  "delete": function _delete(id) {
    return "DELETE FROM users WHERE Id = ".concat(id);
  }
};
exports.userQueries = userQueries;