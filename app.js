var parse = require('co-body');

var route = require('koa-route');
var koa = require('koa');

var common = require('./lib/common')

var compose = require('koa-compose');

var app = module.exports = koa();

app.name = 'koa-angular-demo';

app.env = 'development';

app.use(compose([common.logger(), common.responseTime(),
    route.get('/', function* () {
        "use strict";
        this.body = 'Hello world!';
    }),
    route.get('/users', function* () {
        "use strict";
        this.body = 'Hello users!';
    })

]));

app.listen(3000);