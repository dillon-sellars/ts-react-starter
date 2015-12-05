/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import * as $ from 'jquery';
import CommentList from './commentList';
import CommentForm from './commentForm';
import DataItem from "./commentList";

interface Props extends React.Props<any> {
  url: string;
  pollInterval: number;
}

class CommentBox extends React.Component<Props, any> {
  constructor(props) {
    super(props);
    this.state = {data: []}
  }

  loadCommentsFromServer() {
    console.info("Loading comments from server");
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error("error");
        console.error(this.props.url, status, err.toString());
      }
    })
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
        <CommentForm/>
      </div>
    );
  }
}

export default CommentBox;