import React from "react";
import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import NavMenu from "./NavMenu";

Object.setPrototypeOf(NavBar.prototype, React.Component.prototype);
function NavBar(props) {
  React.Component(props);
}

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 10,
  },
  flex: {
    flex: 1,
  },
};

NavBar.prototype.render = function render() {
  const { classes, brand, options } = this.props;

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <NavMenu options={options} />
        <Typography variant="title" color="inherit" className={classes.flex}>
          {brand}
        </Typography>
        <Button color="inherit">Refresh</Button>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(NavBar);
