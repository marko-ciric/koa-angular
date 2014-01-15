
var responsetime = require('koa-response-time');
var http = require('http');

var session = require('koa-session');
var route = require('koa-route');
var views = require('co-views');
var parse = require('co-body');

var koa = require('koa');

var port = 3000;

var app = koa();
app.use(responsetime);
app.name = 'koa-angular-demo';
app.env = 'development';

app.use(rewrite('/views/', '/'));

app.use(function *() {
    this.body = "Hello world!";
});

app.listen(port);

