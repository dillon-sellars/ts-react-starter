/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
//const __react = React;

import CommentBox from "./commentBox";

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval = {4000}/>,
  document.getElementById('content')
);