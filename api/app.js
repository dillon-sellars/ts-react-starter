'use strict';

var compress = require('koa-compress');
var logger = require('koa-logger');
var serve = require('koa-static');
var route = require('koa-route');
var koa = require('koa');
var path = require('path');
var app = module.exports = koa();

app.use(logger());

// Serve static files
app.use(serve(path.resolve(__dirname, '../ui/app')));

// Compress
app.use(compress());

var routes = require("koa-route");

// routes
var commentRoutes = require("./commentRoutes.js");
app.use(routes.post("/comments", commentRoutes.add));
app.use(routes.get("/comments", commentRoutes.list));
app.use(routes.get("/comments/:id", commentRoutes.get));
app.use(routes.put("/comments/:id", commentRoutes.update));
app.use(routes.del("/comments/:id", commentRoutes.remove));

if (!module.parent) {
  app.listen(9090);
  console.log('listening on port 9090');
}