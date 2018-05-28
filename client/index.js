import React from "react";
import ReactDOM from "react-dom";

// Navigation Header Bar
import NavBar from "./NavBar";
const options = [
  { name: "Home", href: "", active: true, }, 
  { name: "Google", href: "https://google.com", }, 
  { name: "Github", href: "https://github.com", }, 
  { name: "Youtube", href: "https://youtube.com", }, 
];
var navbar = ReactDOM.render(
  <NavBar brand="Videos" options={options} />,
  document.getElementById("navbar")
);

// Videos Content
import Content from "./Content";
var videos = require("./json/videos.json");
var content = ReactDOM.render(
  <Content videos={videos} />,
  document.getElementById("content")
);

