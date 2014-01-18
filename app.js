var responsetime = require('koa-response-time');
var common = require('koa-common');
var route = require('koa-route');
var parse = require('co-body');
var compose = require('koa-compose');
var koa = require('koa');


var app = module.exports = koa();

app.name = 'koa-angular-demo';
app.env = 'development';

function* responseTime(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms');
}

app.use(compose([responseTime, common.logger(), common.favicon(), function* (next) {
    console.log('Requested: ', this.request.url);
    this.body = 'Hello World';
    yield next;
}]));

app.listen(3000);
