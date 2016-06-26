var co = require('co');

var app = require('../app.js');
module.exports.request = require('supertest').agent(app.listen());

var comments = require('../commentRoutes.js').comments;
module.exports.comments = comments;

module.exports.removeAll = function(done){
  co(function *(){
    yield comments.remove({});
    // and other things we need to clean up
    // console.info("remove All done");
    done();
  });
};

module.exports.test_comment  = { author: 'Bob', text : 'Blah blah blah'};
