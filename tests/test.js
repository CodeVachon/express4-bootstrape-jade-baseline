var request = require('supertest'),
    app = require('./../app')
;

describe("The Index Page", function() {
    it('Returns a 200 status code', function(done) {
        request(app)
            .get('/')
            .expect(200)
            .end(done)
        ;
    });
    it('Returns HTML', function(done) {
        request(app)
            .get('/')
            .expect(/html/gi)
            .end(done)
        ;
    });
});
