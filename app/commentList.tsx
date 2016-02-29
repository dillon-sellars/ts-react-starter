/// <reference path="../typings/tsd.d.ts" />
/// <reference path="interfaces.d.ts" />

import * as React from 'react';
import Comment from './comment';


class CommentList extends React.Component<IData, any> {
  constructor(props) {
    super(props);
  }

  render() {
    var commentNodes = this.props.data.map((comment) => {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      )
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}

export default CommentList;