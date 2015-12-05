/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import Comment from './comment';


interface DataItem {
  id: number;
  author: String;
  text: String;
}

interface Props extends React.Props<any> {
  data: DataItem[];
}

class CommentList extends React.Component<Props, any> {
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