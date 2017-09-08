const Router = require('koa-router');
const thumbController = require('./controller/thumb');

var router = new Router();

router.get('/index/index', async (ctx, next) => {
	ctx.body = await ctx.render('index.html');
});

router.post('/add', thumbController.addCount);

module.exports= router;