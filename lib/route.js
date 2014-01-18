var views = require('koa-render');

module.exports = views(__dirname + '/../views', {map : {html: 'jade'}});