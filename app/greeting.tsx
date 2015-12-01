/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';

interface Props extends React.Props<any> {
  name: String;
}

class Greeting extends React.Component<Props, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="greeting">
        <h1>Hello there, {this.props.name}!</h1>
      </div>
    );
  }
}

export default Greeting;