const koa = require('koa');
const convert = require('koa-convert');
const path = require('path');
const render = require('koa-swig');
const serve = require('koa-static');
const co = require('co');
const route = require('./route');
const bodyParser = require('koa-bodyparser');

const app = new koa();

app.use(bodyParser());

// koa-swig settings
app.context.render = co.wrap(render({
  root: path.join(__dirname, './views'),
  autoescape: true,
  cache: 'memory', // disable, set to false 
  ext: 'html',
  writeBody: false
}));

// routers
app.use(route.routes());

// static files
app.use(convert(serve(path.join(__dirname, './public'))));

// 
app.listen(3001, () => {
	console.log('app started at port 3001...');
});