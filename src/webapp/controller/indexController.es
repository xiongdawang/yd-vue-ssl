"use strict"
import indexModel from '../model/indexModel';

const indexController={
	index(){
		return async(ctx,next)=>{
			ctx.body = await ctx.render('index.html',{
				title:'大拇指点赞页面'
			})
		}
	},
	update(){
		return async(ctx,next)=>{
			const indexM=new indexModel();
			const data = await indexM.updatenum();
			console.log("update controller:", data);
			ctx.body = data;
		}
	}
}


export default indexController;