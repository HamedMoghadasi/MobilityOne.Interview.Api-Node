"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connection = void 0;

var _mysql = _interopRequireDefault(require("mysql2"));

require("dotenv/config");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var connection = _mysql["default"].createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true
});

exports.connection = connection;