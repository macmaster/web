import React from "react";
import ReactDOM from "react-dom";

// Navigation Header Bar
import NavBar from "./navbar/NavBar";
var navbar = ReactDOM.render(
  <NavBar brand="Videos" />,
  document.getElementById("navbar")
);

// Videos Content
import Content from "./content/Content";
var videos = require("./json/videos.json");
var content = ReactDOM.render(
  <Content videos={videos} />,
  document.getElementById("content")
);

