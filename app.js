
/**
 * Module dependencies.
 */
var http = require('http');
var koa = require('koa');
var route = require('koa-route');
var path = require('path');

var routes = require('./routes');
var user = require('./routes/user');

var app = koa();

var port = 3000;

// all environments
app.name = 'koa-angular-demo';
app.env = 'development';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// Replace with koa middleware .
//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.methodOverride());
//app.use(express.cookieParser('your secret here'));
//app.use(express.session());
//app.use(app.router);

app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.get('/', function(req, res) {
    res.render('index');
});

app.listen(port);
