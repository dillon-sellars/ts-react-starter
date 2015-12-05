/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import * as marked from 'react-marked';

interface Props extends React.Props<any> {
  author: String;
}

class Comment extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {marked(this.props.children.toString())}
      </div>
    );
  }
}

export default Comment;