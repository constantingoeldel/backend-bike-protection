"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _helmet = _interopRequireDefault(require("helmet"));

var _cors = _interopRequireDefault(require("cors"));

var _sigfox = _interopRequireDefault(require("./sigfox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express.default)();
server.use((0, _helmet.default)());
server.use((0, _cors.default)());
server.use(_express.default.json());
server.use(_express.default.urlencoded({
  extended: true
}));
server.use('/api/sigfox', _sigfox.default); //server.use('/api/tags', tags)

server.get('/', (req, res) => {
  res.send('This api is connected to the bike project');
});
var _default = server;
exports.default = _default;