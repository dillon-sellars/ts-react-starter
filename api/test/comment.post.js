var co = require("co");
var should = require("should");
var helpers = require('./testHelpers.js');
var comments = helpers.comments;
var request = helpers.request;

describe('POST to /comment', function () {

  var test_comment = {};

  beforeEach(function (done) {
    test_comment = helpers.test_comment;
    helpers.removeAll(done);
  });

  afterEach(function (done) {
    helpers.removeAll(done);
  });

  it('creates a new comment for complete posted data', function (done) {
    // Post
    request
      .post('/comments')
      .send(test_comment)
      .expect('location', /^\/[0-9a-fA-F]{24}$/) // Mongo Object Id /234234523562512512
      .expect(201)
      .end(function () {
        co(function *() {
          var commentFromDb = yield comments.findOne({author: test_comment.author});
          commentFromDb.text.should.equal(test_comment.text);
        }).then(done, done);
      });
  });

  it('returns validation error if author is not present', function (done) {
    var u = {text: "A comment without an author"};

    request
      .post('/comments')
      .send(u)
      .expect('ValidationError', "Author is required")
      .expect(200, done);
  });

  it('returns validation error if comment text is not present', function (done) {
    var u = {author: "George"};

    request
      .post('/comments')
      .send(u)
      .expect('ValidationError', "Text is required")
      .expect(200, done);
  });
});