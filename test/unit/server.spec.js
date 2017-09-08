// const rp = require('request-promise');

// describe("接口测试", () => {
// 	it("点赞接口测试", async () => {
// 		let addTest = (data) => {
// 			return new Promise((resolve, reject) => {
// 				rp({
// 					method: 'POST',
// 				    uri: 'http://localhost:3001/add',
// 					headers: {
// 						'Content-Type': 'application/json; charset=utf-8'
// 					},
// 				    form: data
// 				})
// 					.then(body => resolve(body))
// 					.catch(error => reject(error));
// 			})
// 		};
// 		let json = await addTest({id:1, num: 2});
// 		expect(json.code).toBe(1);
// 	})
	
// });
