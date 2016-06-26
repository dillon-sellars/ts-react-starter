var co = require('co');
var helpers = require('./testHelpers.js');
var comments = helpers.comments;
var request = helpers.request;

describe('DEL comments /:id', function () {

  var test_comment = {};

  beforeEach(function (done) {
    test_comment = helpers.test_comment;
    helpers.removeAll(done);
  });

  afterEach(function (done) {
    helpers.removeAll(done);
  });

  it('deletes an existing comment', function (done) {
    co(function *() {
      // Insert test comment in database
      var comment = yield comments.insert(test_comment);
      var commentUrl = '/comments/' + comment._id;

      // Delete the comment
      request
        .del(commentUrl)
        .expect(200, done);
    });
  });
});