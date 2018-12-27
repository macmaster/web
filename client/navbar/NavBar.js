import React from "react";
import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import GithubIcon from "./GithubIcon";

const styles = {
  toolbar: {
    display: "flex",
  },
  homeButton: {
    margin: "0px 10px",
  },
  title: {
    flex: "auto",
  },
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, title } = this.props;

    return (
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Typography variant="title" className={classes.title}
            color="inherit">{title}</Typography>
          <IconButton component='a' color="inherit"
            href='https://github.com/ronny-macmaster/web.git'>
            <GithubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
};

export default withStyles(styles)(NavBar);

