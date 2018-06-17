import React from "react";
import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import HomeButton from "./HomeButton";

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
    const { classes, brand } = this.props;

    return (
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <HomeButton className={classes.homeButton} />
          <Typography variant="title" className={classes.title}
            color="inherit">{brand}</Typography>
        </Toolbar>
      </AppBar>
    );
  }
};

export default withStyles(styles)(NavBar);

