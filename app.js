var parse = require('co-body');
var route = require('koa-route');
var compose = require('koa-compose');
var common = require('./lib/common')
var render = require('./lib/render')
var koa = require('koa');

var mongo = require('mongoose');
var printObj = compose.printObj;

var app = module.exports = koa();

app.name = 'koa-angular-demo';
app.env = 'development';
app.keys = ['koa-angular', 'key'];

app.use(compose([common.logger(), common.responseTime(), common.favicon(), common.compress(),
    route.get('/', function* () {
        this.body = 'Hello world!';
    }),
    route.get('/user', function* () {
        var object = common.printObj(this.path);

        this.body = object + ': Hello users!';
    }),
    route.get('/user/:action/:id', function* (action, id) {
        this.body = action + ' user ' + id;
    }),
    route.get('/post', function* () {
        this.body = 'Hello post.';
    }),
    route.get('/post/:id', function* (id) {
        this.body = id;
    }),
    route.get('/templates/index', function* () {
        "use strict";
        this.body = yield render('index', {title: 'Hello Jade!'});
    })
]));

app.listen(3000);