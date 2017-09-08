const rp = require('request-promise');

let addToPhp = function(data) {
	return new Promise((resolve, reject) => {
		rp({
			method: 'POST',
		    uri: 'http://localhost/yd/index.php',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
		    form: data
		})
			.then(body => resolve(body))
			.catch(error => reject(error));
	})
}

exports.addCount = async (ctx, next) => {
	let json = await addToPhp(ctx.request.body);
	ctx.body = json;
}

