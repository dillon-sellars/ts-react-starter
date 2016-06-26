var co = require('co');
var helpers = require('./testHelpers.js');
var comments = helpers.comments;
var request = helpers.request;

describe('PUT to /comments', function () {

  var test_comment = {};

  beforeEach(function (done) {
    test_comment = helpers.test_comment;
    helpers.removeAll(done);
  });

  afterEach(function (done) {
    helpers.removeAll(done);
  });

  it('updates an existing comment for complete put data', function (done) {
    co(function *() {
      // Insert test user in database
      var comment = yield comments.insert(test_comment);
      var commentUrl = '/comments/' + comment._id;

      request
        .put(commentUrl)
        .send({author: 'Marcus v2', text: 'Yadda yadda yadda'})
        .expect('location', commentUrl)
        .expect(204, done);
    });
  });
});