import requestsuper from 'supertest';
import '../../src/webapp/app.es';

function request(){
	return requestsuper(app.listen(3001))
}

describe('测试路由', function() {
  it('点赞', function(done) {
    request()
      .get('/index/updata')
      .expect('Content-Type', /json/)
      .expect(200).end(function(err, res) {
    if (res.data==1) return done(err) ;
    done();
  });
  });
});