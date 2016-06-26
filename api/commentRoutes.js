var parse = require("co-body");

var monk = require("monkii");
var wrap = require("co-monk");
var db = monk("localhost/commentsApi");
var comments = wrap(db.get("comments"));
module.exports.comments = comments;

module.exports.add = function *() {
  var postedComment = yield parse(this);
  if (!exists(postedComment.text)) {
    this.set('ValidationError', 'Text is required');
    this.status = 200;
    return;
  }

  if (!exists(postedComment.author)) {
    this.set('ValidationError', 'Author is required');
    this.status = 200;
    return;
  }

  var insertedComment = yield comments.insert(postedComment);

  this.set("location", this.originalUrl + "/" + insertedComment._id);
  this.status = 201;
};

module.exports.get = function *(id) {
  console.info("get single for " + id);
  var comment = yield comments.findById(id);
  this.body = comment;
  this.status = 200;
};

module.exports.list = function *() {
  console.info("getAll");
  var commentList = yield comments.find({});
  this.body = commentList;
  this.status = 200;
};

module.exports.update = function *(id) {
  var commentFromRequest = yield parse(this);

  yield comments.updateById(id, commentFromRequest);

  var prefixOfUrl = this.originalUrl.replace(id, "");
  this.set("location", prefixOfUrl + id);
  this.status = 204;
};

module.exports.remove = function *(id) {
  yield comments.remove({_id: id});
  this.status = 200;
};

var exists = function (value) {
  if (value === undefined)
    return false;
  if (value === null)
    return false;
  return true;
};
