"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Response = /*#__PURE__*/function () {
  function Response() {
    _classCallCheck(this, Response);

    this.statusCode = null;
    this.type = null;
    this.data = null;
    this.message = null;
  }

  _createClass(Response, [{
    key: "setSuccess",
    value: function setSuccess(statusCode, message, data) {
      this.statusCode = statusCode;
      this.message = message;
      this.data = data;
      this.type = "success";
    }
  }, {
    key: "setError",
    value: function setError(statusCode, message, data) {
      this.statusCode = statusCode;
      this.message = message;
      this.data = data;
      this.type = "error";
    }
  }, {
    key: "send",
    value: function send(res) {
      var result = {
        status: this.type,
        message: this.message,
        data: this.data
      };

      if (this.type === "success") {
        return res.status(this.statusCode).json(result);
      } else if (this.data) {
        return res.status(this.statusCode).json(result);
      }

      return res.status(this.statusCode).json({
        status: this.type,
        message: this.message
      });
    }
  }]);

  return Response;
}();

exports["default"] = Response;