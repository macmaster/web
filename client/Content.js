import React from "react";

import { withStyles } from "@material-ui/core/styles";

import VideoGrid from "./VideoGrid";
import VideoPlayer from "./VideoPlayer";


function Content(props) {
  React.Component(props);
  
  this.state = {
    video: {}
  };

  this.handlers = {
    updateVideo: (video, e) => {
      console.log("video: %o", video);
      this.setState({ video, autoplay: e });
      e && e.preventDefault();
      e && window.scrollTo(0, 0);
    },
    loadRandomVideo: (e) => {
      const SEED = Math.floor(Math.random() * this.props.videos.length)
      const video = this.props.videos[SEED];
      this.handlers.updateVideo(video, e);
    },
  };
}

const styles = theme => ({
  root: {
    // display: "flex",
    // justifyContent: "space-between",
    display: "block",
    margin: "auto",
    width: "650px",
  },
  player: {
    margin: "5px",
    // width: "648px",
    // flex: "none",
  },
  grid: {
    margin: "5px",
  },
});

Content.prototype.render = function render() {
  const { classes, videos } = this.props;
  const { video, autoplay } = this.state;
  const { updateVideo, loadRandomVideo } = this.handlers;

  return (
    <div className={classes.root}>
      <div className={classes.player}>
        <VideoPlayer videoHeight={480} autoplay={autoplay}
          video={video} refresh={loadRandomVideo} />
      </div>
      <div className={classes.grid}>
        <VideoGrid callback={updateVideo} videos={videos} />
      </div>
    </div>
  );
}

Object.setPrototypeOf(Content.prototype, React.Component.prototype);
export default withStyles(styles)(Content);

