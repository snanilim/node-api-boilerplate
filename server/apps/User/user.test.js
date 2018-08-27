const request = require('supertest');
const app = require('../../config/app');

test('should pass integration tests', (done) => {
    request(app)
      .get('/v1')
      .expect(200, { message: 'Welcome To Node Api Boilerplate' })
      .end((err) => {
        if (err) throw done(err);
        done();
    });
});
