import React from "react";

import { withStyles } from "@material-ui/core/styles";

Object.setPrototypeOf(VideoGrid.prototype, React.Component.prototype);
function VideoGrid(props) {
  React.Component(props);
  this.state = {
    isLoaded: false,
    error: null,
    rows: [],
  };

  this.handlers = {
    handleClick: (name, video, e) => {
      this.props.callback(name, video, e);
    },
  };
}

const styles = theme => ({
  root: {
    width: "100%",
  },
});

VideoTable.prototype.componentDidMount = function componentDidMount() {
  // fetch videos
  setTimeout(() =>
  this.setState((prev, props) => ({
    isLoaded: true,
    rows: props.rows,
  })), 0);
}

VideoGrid.prototype.render = function render() {
  return (
    <p>Hello World!</p>
  );
}

export default withStyles(styles)(VideoGrid);
