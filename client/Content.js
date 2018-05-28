import React from "react";

import { withStyles } from "@material-ui/core/styles";

import VideoGrid from "./VideoGrid";
import VideoPlayer from "./VideoPlayer";

// <VideoGrid callback={updateVideo} videos={videos} />

function Content(props) {
  React.Component(props);
}

const style = theme => ({
});
const VIDEOS = require("./json/videos.json");

Object.setPrototypeOf(Content.prototype, React.Component.prototype);
export default withStyles(styles)(Content);
