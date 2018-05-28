import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

function VideoPlayer(props) {
  React.Component(props);
}

const style = {
  root: {
    margin: "10px auto",
    padding: "10px",
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
    border: "2px solid purple",
    objectFit: "fill",
    width: "100%",
  },
};

VideoPlayer.prototype.componentDidMount = function componentDidMount() {
  this.props.refresh();
}

VideoPlayer.prototype.render = function render() {
  const { classes, video, autoplay, refresh, videoHeight } = this.props;

  return (
    <Paper className={classes.root}>
      <div className={classes.header}>
        <Typography variant="headline" className={classes.title}
          color="inherit">{video.name}</Typography>
        <Button className={classes.button} onClick={refresh}>Random</Button>
      </div>
      <video className={classes.player} height={videoHeight}  
        src={video.video} autoPlay={autoplay} controls></video>
      <Typography color="inherit" variant="title">
        Download: <a href={video.video} download>{video.video}</a>
      </Typography>
    </Paper>
  );
}

Object.setPrototypeOf(VideoPlayer.prototype, React.Component.prototype);
export default withStyles(style)(VideoPlayer);

