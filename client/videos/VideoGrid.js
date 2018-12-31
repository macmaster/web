/**
 * Selection grid of videos
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = theme => ({
  root: {
    margin: '10px auto',
    padding: '10px',
    height: '100%',
  },
  grid: {
    height: '100%',
    width: '100%',
  },
  title: {
    background: 
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
});

class VideoGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      error: null,
    };

    this.handlers = {
      handleClick: (video, e) => {
        this.props.callback(video, e);
      },
    };
  }

  componentDidMount() {
    setTimeout(() =>
      // fetch videos
      this.setState((prev, props) => ({
        videos: props.videos,
      })
    ), 0);
  }

  render() {
    const { classes } = this.props;
    const { error, videos } = this.state;
    const { handleClick } = this.handlers;

    let videoTiles = videos.map(video => (
      <GridListTile key={video.video}>
        <a href={video.video} onClick={handleClick.bind(null, video)}>
          <img className={classes.thumbnail} src={video.image} />
        </a>
        <GridListTileBar className={classes.title}
          title={video.name} titlePosition='top' />
      </GridListTile>
    ));

    return (
      <Paper className={classes.root}>
        <GridList className={classes.grid} cols={2}>
          {videoTiles}
        </GridList>
      </Paper>
    );
  }

}

export default withStyles(styles)(VideoGrid);
