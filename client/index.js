/**
 * index.js
 * Application entry point.
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";

import VideoGrid from 'content/Content';
import NavBar from 'navbar/NavBar';
const videos = require('json/videos.json');

// Application Content
function Content(props) {
  return (
    <React.Fragment>
      <NavBar brand="Swish" />
      <VideoGrid videos={videos} />
    </React.Fragment>
  );
}

var content = ReactDOM.render(
  <Content />,
  document.getElementById('content')
);

