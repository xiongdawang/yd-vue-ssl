import utils from '../../src/webapp/public/js/utils.js';

describe("测试加一函数", function() {
	it("add success", function() {
		expect(utils.add(1)).toBe(2);
	})
})