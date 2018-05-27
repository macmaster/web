import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import VideoTable from "./VideoTable";

function VideoPlayer(props) {
  React.Component(props);

  this.state = {
    video: {}
  };

  this.handlers = {
    updateVideo: (video, e) => {
      console.log("video: %o", video);
      this.setState({ video });

      this.refs.player.src = video.video;
      this.refs.player.load();
      e && this.refs.player.play();
      e && e.preventDefault();
      window.scrollTo(0, 0);
    },
  };
}

const style = {
  root: {
    display: "block",
    margin: "10px auto",
    width: "650px",
  },
  paper: {
    padding: "10px",
    margin: "10px auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "5px",
  },
  title: {
    fontSize: "2rem",
  },
  button: {
    background: 'linear-gradient(135deg, red 80%, orange 90%)',
  },
  player: {
    margin: "-4px",
    border: "4px solid purple",
    width: "100%",
  },
};

VideoPlayer.prototype.componentDidMount = function componentDidMount() {
  loadRandomVideo.call(this);
}

VideoPlayer.prototype.render = function render() {
  const { classes, videos, columns } = this.props;
  const { updateVideo } = this.handlers;
  const { video } = this.state;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.header}>
          <Typography variant="headline" className={classes.title}
            color="inherit">{video.name}</Typography>
          <Button ref="refreshButton" className={classes.button}
             onClick={loadRandomVideo.bind(this)}>Random</Button>
        </div>
        <video ref="player" height="475px" className={classes.player} controls></video>
        <Typography color="inherit">
          Download: <a href={video.video} download>{video.video}</a>
        </Typography>
      </Paper>
      {
        // <VideoTable ref="table" callback={updateVideo}
        // columns={columns} rows={videos} />
      } 
    </div>
  );
}

export function loadRandomVideo(e) {
  const SEED = Math.floor(Math.random() * this.props.videos.length)
  const video = this.props.videos[SEED];
  this.handlers.updateVideo(video, e);
}

Object.setPrototypeOf(VideoPlayer.prototype, React.Component.prototype);
export default withStyles(style)(VideoPlayer);
