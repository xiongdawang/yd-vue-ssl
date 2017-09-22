import rp from 'request-promise';

class indexModel {
	construtor(ctx) {
		this.ctx = ctx;
	}
	updatenum() {
		var options = {
			method: 'GET',
			uri: 'http://localhost/yd/index.php'
		};
		return new Promise((resolve, reject) => {
			rp(options)
				.then(function (body) {
					const info = JSON.parse(body);
					console.log("info:", info);
					if (info.success) {
						resolve({success: true, data: 1});
					} else {
						reject({success: false,data: 0});
					}
				})
				.catch(function (err) {
					reject({success: false, data: 0});
				});
		})
	}
}

export default indexModel;