"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _userService = _interopRequireDefault(require("../services/user-service"));

var _response = _interopRequireDefault(require("../common/response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var response = new _response["default"]();

var UserController = /*#__PURE__*/function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, null, [{
    key: "getAll",
    value: function () {
      var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _userService["default"].getAll().then(function (result) {
                  response.setSuccess(200, "all users fetched successfully.", result[0]);
                  return response.send(res);
                })["catch"](function (error) {
                  response.setError(500, "fetching all users failed!", error);
                  return response.send(res);
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getAll(_x, _x2) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "getById",
    value: function () {
      var _getById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var id;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = req.params.id;

                _userService["default"].getById(id).then(function (result) {
                  if (result[0].length > 0) {
                    response.setSuccess(200, "the user fetched successfully.", result[0]);
                    return response.send(res);
                  } else {
                    response.setError(404, "the user not founded!");
                    return response.send(res);
                  }
                })["catch"](function (error) {
                  response.setError(500, "fetching the user failed!", error);
                  return response.send(res);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getById(_x3, _x4) {
        return _getById.apply(this, arguments);
      }

      return getById;
    }()
  }, {
    key: "add",
    value: function () {
      var _add = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var user;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                user = req.body;

                _userService["default"].add(user).then(function (result) {
                  response.setSuccess(200, "user added successfully.", result[0]);
                  return response.send(res);
                })["catch"](function (error) {
                  response.setError(500, "adding user failed!", error);
                  return response.send(res);
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function add(_x5, _x6) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var user;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                user = req.body;

                _userService["default"].update(user).then(function (result) {
                  response.setSuccess(200, "user updated successfully.", result[0]);
                  return response.send(res);
                })["catch"](function (error) {
                  response.setError(500, "updating user failed!", error);
                  return response.send(res);
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function update(_x7, _x8) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var id;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = req.params.id;

                _userService["default"]["delete"](id).then(function (result) {
                  if (result[0].affectedRows > 0) {
                    response.setSuccess(200, "user deleted successfully.");
                    return response.send(res);
                  } else {
                    response.setError(404, "user not founded.");
                    return response.send(res);
                  }
                })["catch"](function (error) {
                  response.setError(500, "deleting user failed!", error);
                  return response.send(res);
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function _delete(_x9, _x10) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);

  return UserController;
}();

exports["default"] = UserController;