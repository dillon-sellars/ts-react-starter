/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
//const __react = React;

import Greeting from "./greeting";

ReactDOM.render(
  <Greeting name="bobby"/>,
  document.body
);