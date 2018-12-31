/**
 * Responsive AppBar with navigation
 */

import React from "react";
import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import GithubIcon from "icons/GithubIcon";

const styles = theme => ({
  root: { },
  toolbar: {
    display: "flex",
  },
  title: {
    flex: "auto",
  },
  menuIcon: {
    marginRight: "12px",
  }
});

class SwishAppBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, repo, title: titleProp } = this.props;

    const menuIcon = (
      <IconButton className={classes.menuIcon} color="inherit">
        <MenuIcon />
      </IconButton>
    );

    const title = (
      <Typography className={classes.title} variant="h6"
        color="inherit">
        {titleProp}
      </Typography>
    );

    const githubIcon = (
      <IconButton className={classes.githubIcon} color="inherit"
        component='a' href={repo}>
        <GithubIcon />
      </IconButton>
    );

    return (
      <AppBar className={classes.root}>
        <Toolbar className={classes.toolbar}>
          {menuIcon} {title} {githubIcon}
        </Toolbar>
      </AppBar>
    );
  }
};

export default withStyles(styles)(SwishAppBar);
