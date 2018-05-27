import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import VideoTable from "./VideoTable";

Object.setPrototypeOf(VideoPlayer.prototype, React.Component.prototype);
function VideoPlayer(props) {
  React.Component(props);

  this.handlers = {
    updateVideo: (name, video, e) => {
      e && e.preventDefault();
      this.refs.player.src = video;
      this.refs.title.innerHTML = name;
      this.refs.player.load();
      this.refs.player.play();
      window.scrollTo(0, 0);
    },
  };
}

const style = {
  root: {
    display: "block",
    margin: "10px auto",
    width: "50%",
  },
  player: {
    // border: "4px solid purple",
    width: "100%",
  },
  table: {
  },
};


VideoPlayer.prototype.componentDidMount = function componentDidMount() {
  const SEED = Math.floor(Math.random() * this.props.rows.length)
  this.refs.player.src = this.props.rows[SEED].video;
  this.refs.title.innerHTML = this.props.rows[SEED].name;
  this.refs.player.load();
}

VideoPlayer.prototype.render = function render() {
  const { classes, rows, columns } = this.props;
  const { updateVideo } = this.handlers;

  return (
    <div className={classes.root}>
      <h1 ref="title">Video Title</h1>
      <video ref="player" className={classes.player} controls></video>
      <p>Video Description...</p>
      <VideoTable ref="table" className={classes.table}
        callback={updateVideo} columns={columns} rows={rows} />,
    </div>
  );
}

export default withStyles(style)(VideoPlayer);
