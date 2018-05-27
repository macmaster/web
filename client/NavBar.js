import React from "react";
import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import NavMenu from "./NavMenu";

function NavBar(props) {
  React.Component(props);
}

const styles = {
  root: {
    marginBottom: "10px",
  },
  title: {
    flex: "auto",
  },
};

NavBar.prototype.render = function render() {
  const { classes, brand, options } = this.props;

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <NavMenu options={options} />
        <Typography variant="title" className={classes.title}
          color="inherit">{brand}</Typography>
      </Toolbar>
    </AppBar>
  );
}

Object.setPrototypeOf(NavBar.prototype, React.Component.prototype);
export default withStyles(styles)(NavBar);
