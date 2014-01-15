
var http = require('http');

var route = require('koa-route');
var views = require('co-views');
var parse = require('co-body');
var koa = require('koa');

var port = 3000;

var app = koa();
app.name = 'koa-angular-demo';
app.env = 'development';

app.use(function *() {
    this.body = "Hello world!";
});

app.listen(port);

