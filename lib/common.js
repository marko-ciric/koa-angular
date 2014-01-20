var Q = require('q');
var favicon = require('koa-favicon');
var responseTime = require('koa-response-time');
var logger = require('koa-logger');
var winston = require('winston');
var mount = require('koa-mount');
var compress = require('koa-compress');

exports.logger = logger;
exports.responseTime = responseTime;
exports.mount = mount;
exports.favicon = favicon;
exports.compress = compress;

exports.printObj = function* (object) {
    "use strict";
    yield JSON.stringify(object);
}