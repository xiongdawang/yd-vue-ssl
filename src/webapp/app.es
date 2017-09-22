import path from 'path';
import Koa from 'koa';
import router from 'koa-simple-router';
import render from 'koa-swig';
import serve from 'koa-static';
import convert from 'koa-convert';
import co from 'co';
import initRoutes from './controller/initRoutes';
import 'babel-polyfill';

const app = new Koa();

app.context.render = co.wrap(render({
  root: path.join(__dirname, 'views'),
  autoescape: true,
  cache: 'memory', // disable, set to false 
  ext: 'html',
  writeBody: false
}));

initRoutes.init(app, router);

app.use(convert(serve(path.join(__dirname, './'))));

app.listen(3001, () => {
	console.log('server is running...');
});