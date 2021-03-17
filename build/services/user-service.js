"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _database = require("../common/database");

var _userQueries = require("./queries/user-queries");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserService = /*#__PURE__*/function () {
  function UserService() {
    _classCallCheck(this, UserService);
  }

  _createClass(UserService, null, [{
    key: "getAll",
    value: function () {
      var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                return _context.abrupt("return", _database.connection.promise().query(_userQueries.userQueries.getAll()));

              case 4:
                _context.prev = 4;
                _context.t0 = _context["catch"](0);
                console.log("error", _context.t0);
                throw _context.t0;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 4]]);
      }));

      function getAll() {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "getById",
    value: function () {
      var _getById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                return _context2.abrupt("return", _database.connection.promise().query(_userQueries.userQueries.getById(id)));

              case 4:
                _context2.prev = 4;
                _context2.t0 = _context2["catch"](0);
                console.log("error", _context2.t0);
                throw _context2.t0;

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 4]]);
      }));

      function getById(_x) {
        return _getById.apply(this, arguments);
      }

      return getById;
    }()
  }, {
    key: "add",
    value: function () {
      var _add = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(user) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                return _context3.abrupt("return", _database.connection.promise().query(_userQueries.userQueries.add(user)).then(function (result) {
                  return result[0][1]; // 'Cuz we run two statement in query, as a result it'll return a 2 dim array.
                }));

              case 4:
                _context3.prev = 4;
                _context3.t0 = _context3["catch"](0);
                console.log("error", _context3.t0);
                throw _context3.t0;

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 4]]);
      }));

      function add(_x2) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(user) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                return _context4.abrupt("return", _database.connection.promise().query(_userQueries.userQueries.update(user)).then(function (result) {
                  return result[0][1]; // 'Cuz we run two statement in query, as a result it'll return a 2 dim array.
                }));

              case 4:
                _context4.prev = 4;
                _context4.t0 = _context4["catch"](0);
                console.log("error", _context4.t0);
                throw _context4.t0;

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 4]]);
      }));

      function update(_x3) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                return _context5.abrupt("return", _database.connection.promise().query(_userQueries.userQueries["delete"](id)));

              case 4:
                _context5.prev = 4;
                _context5.t0 = _context5["catch"](0);
                console.log("error", _context5.t0);
                throw _context5.t0;

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 4]]);
      }));

      function _delete(_x4) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);

  return UserService;
}();

exports["default"] = UserService;