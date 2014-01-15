
var responsetime = require('koa-response-time');
var compose = require('koa-compose');
var koa = require('koa');
var logger = require('koa-logger');

var app = module.exports = koa();

app.name = 'koa-angular-demo';
app.env = 'development';

function *responseTime(next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms');
}

// logger

function* logger(next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    if ('test' != process.env.NODE_ENV) {
        console.log('%s %s - %s', this.method, this.url, ms);
    }
}

app.use(compose([responseTime, logger]));

app.use(function *(){
    this.body = 'Hello World';
});

if ()app.listen(3000);

