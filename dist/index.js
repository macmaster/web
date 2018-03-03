"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Button = require("material-ui/Button");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var p = document.createElement('p');
p.innerHTML = "{generated by javascript}";
p.color = "red";
document.body.appendChild(p);

function CluckButton() {
  return _react2.default.createElement(
    _Button2.default,
    { variant: "raised", color: "primary" },
    "cluck"
  );
}

_reactDom2.default.render(_react2.default.createElement(CluckButton, null), document.querySelector("#button"));