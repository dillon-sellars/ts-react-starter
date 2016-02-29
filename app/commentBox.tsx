/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts"/>

import * as React from 'react';
import * as $ from 'jquery';
import CommentList from './commentList';
import CommentForm from './commentForm';

class CommentBox extends React.Component<ICommentBoxProps, IData> {
  constructor(props : ICommentBoxProps) {
    super(props);
    this.state = {data: []}
  }

  loadCommentsFromServer() {
    console.info("Loading comments from server");
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (data:Array<IDataItem>) => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error("error");
        console.error(this.props.url, status, err.toString());
      }
    })
  }

  handleCommentSubmit(comment:IDataItem) {
    let comments = this.state.data;
    comment.id = Date.now();
    let newComments = comments.concat([comment]);
    this.setState({data: newComments});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: (data) => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        this.setState({data: comments});
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  componentDidMount() {
    console.info("componentDidMount");
    this.loadCommentsFromServer();
    setInterval(() => this.loadCommentsFromServer(), this.props.pollInterval)
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={comment => this.handleCommentSubmit(comment)}/>
      </div>
    );
  }
}

export default CommentBox;