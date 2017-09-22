"use strict";

var _utils = require("../../src/webapp/public/js/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("测试加一函数", function () {
	it("add success", function () {
		expect(_utils2.default.add(1)).toBe(2);
	});
});