import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

function VideoGrid(props) {
  React.Component(props);
  this.state = {
    isLoaded: false,
    error: null,
    videos: [],
  };

  this.handlers = {
    handleClick: (video, e) => {
      this.props.callback(video, e);
    },
  };
}

const styles = theme => ({
  root: {
    margin: "10px auto",
    padding: "10px",
  },
  grid: {
    height: "800px",
  },
  thumbnail: {
    width: "400px",
    height: "400px",
  },
});

VideoGrid.prototype.componentDidMount = function componentDidMount() {
  // fetch videos
  setTimeout(() =>
  this.setState((prev, props) => ({
    isLoaded: true,
    videos: props.videos,
  })), 0);
}

VideoGrid.prototype.render = function render() {
  const { classes } = this.props;
  const { isLoaded, error, videos } = this.state;
  const { handleClick } = this.handlers;

  let videoTiles = isLoaded && videos.map(video => (
    <GridListTile className={classes.thumbnail} key={video.video}>
      <a href={video.video} onClick={handleClick.bind(null, video)}>
        <img src={video.image} />
      </a>
    </GridListTile>
  ));

  return (
    <Paper className={classes.root}>
      <GridList className={classes.grid}>
        {videoTiles}
      </GridList>
    </Paper>
  );
}

Object.setPrototypeOf(VideoGrid.prototype, React.Component.prototype);
export default withStyles(styles)(VideoGrid);
