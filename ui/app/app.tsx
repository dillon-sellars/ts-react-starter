/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import CommentBox from "./commentBox";

ReactDOM.render(
  <CommentBox url="/comments" pollInterval = {4000}/>,
  document.getElementById('content')
);