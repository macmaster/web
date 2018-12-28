/**
 * Content base for videos
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import VideoGrid from './VideoGrid';
import VideoPlayer from './VideoPlayer';

const styles = theme => ({
  root: {
    // display: 'flex',
    // justifyContent: 'space-between',
    display: 'block',
    margin: 'auto',
    width: '650px',
    maxWidth: '100%',
  },
  player: {
    margin: '5px',
    // width: '648px',
    // flex: 'none',
  },
  grid: {
    margin: '5px',
  },
});

class VideoContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      video: this.getRandomVideo()
    };

    this.handlers = {
      updateVideo: (video, e) => {
        console.log('video: %o', video);
        this.setState({ video, autoplay: e });
        e && e.preventDefault();
        e && window.scrollTo(0, 0);
      },
      loadRandomVideo: (e) => {
        const video = this.getRandomVideo();
        this.handlers.updateVideo(video, e);
      },
    };
  }

  getRandomVideo() {
    const SEED = Math.floor(Math.random() * this.props.videos.length)
    return this.props.videos[SEED];
  }

  render() {
    const { classes, videos } = this.props;
    const { video, autoplay } = this.state;
    const { updateVideo, loadRandomVideo } = this.handlers;

    let scale = Math.min(650, window.innerWidth) / 650;
    let videoHeight = scale * 480;

    return (
      <div className={classes.root}>
        <div className={classes.player}>
          <VideoPlayer videoHeight={videoHeight} autoplay={autoplay}
            video={video} refresh={loadRandomVideo} />
        </div>
        <div className={classes.grid}>
          <VideoGrid callback={updateVideo} videos={videos} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(VideoContent);
