import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

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
    height: "100%",
  },

  grid: {
    height: "100%",
    width: "100%",
  },
  title: {
    background: 
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  thumbnail: {
    width: "100%",
    height: "100%",
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
    <GridListTile key={video.video}>
      <a href={video.video} onClick={handleClick.bind(null, video)}>
        <img className={classes.thumbnail} src={video.image} />
      </a>
      <GridListTileBar className={classes.title}
        title={video.name} titlePosition="top" />
    </GridListTile>
  ));

  return (
    <Paper className={classes.root}>
      <GridList className={classes.grid} cols={3}>
        {videoTiles}
      </GridList>
    </Paper>
  );
}

Object.setPrototypeOf(VideoGrid.prototype, React.Component.prototype);
export default withStyles(styles)(VideoGrid);

