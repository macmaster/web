/**
 * Application entry point
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import HomeIcon from '@material-ui/icons/Home';

import SwishAppBar from 'nav/SwishAppBar';
import TopButton from 'nav/TopButton';
import VideoContent from 'videos/VideoContent';
import { theme } from 'style/theme';
import { videos } from 'videos/data/videos';

const repo = 'https://github.com/ronny-macmaster/web.git';
const title = 'Swish';

// Application Content
function Content(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <SwishAppBar title={title} repo={repo} />
      <VideoContent videos={videos} />
      <TopButton variant='up' />
    </MuiThemeProvider>
  );
}

var content = ReactDOM.render(
  <Content />,
  document.getElementById('content')
);

