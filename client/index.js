/**
 * index.js
 * Application entry point.
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';
import { withStyles } from '@material-ui/core/styles';

import NavBar from 'navbar/NavBar';
import VideoGrid from 'content/Content';

const VIDEOS = require('data/videos.json');

const AbsoluteFab =
  withStyles(theme => ({
    root: {
      position: 'fixed',
      bottom: 4 * theme.spacing.unit,
      right: 4 * theme.spacing.unit,
    },
  }))(Fab);

// Application Content
function Content(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar title="Swish" />
      <VideoGrid videos={VIDEOS} />
      <AbsoluteFab component='a' href='#'
        color='secondary'><HomeIcon /></AbsoluteFab>
    </React.Fragment>
  );
}

var content = ReactDOM.render(
  <Content />,
  document.getElementById('content')
);

