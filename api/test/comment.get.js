var co = require('co');
var helpers = require('./testHelpers.js');
var comments = helpers.comments;
var request = helpers.request;

describe('GET comments /:id ', function () {

  var test_comment = {};

  beforeEach(function (done) {
    test_comment = helpers.test_comment;
    helpers.removeAll(done);
  });

  afterEach(function (done) {
    helpers.removeAll(done);
  });

  it('returns JSON for existing comment', function (done) {
    co(function *() {
      // Insert test comment in database
      var comment = yield comments.insert(test_comment);
      var commentUrl = '/comments/' + comment._id;

      // Get
      request
        .get(commentUrl)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(/Bob/)
        .expect(/Blah blah blah/)
        .expect(200, done);
    });
  });
  
  it('returns all for many comments', function(done) {
    co(function *() {
      var comment1 = yield comments.insert(test_comment);
      var comment2 = yield comments.insert({author: "Joe", text: "Joe was here"});

      // Get
      request
        .get("/comments/")
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(/Bob/)
        .expect(/Joe/)
        .expect(200, done);
    });
  });
});