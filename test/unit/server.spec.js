'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

require('../../src/webapp/app.es');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function request() {
  return (0, _supertest2.default)(app.listen());
}

describe('测试路由', function () {
  it('点赞', function (done) {
    request().get('/index/updata').expect('Content-Type', /json/).expect(200).end(function (err, res) {
      if (res.data == 1) return done(err);
      done();
    });
  });
});