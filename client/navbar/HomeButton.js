import React from "react";
import { withStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";

const styles = { };

class HomeButton extends React.Component {
  constructor(props) {
    super(props);

    this.handlers = {
      handleClick: (e) => {
        window.scrollTo(0, 0);
      },
    };
  }

  render() {
    const { classes, className } = this.props;

    return (
      <IconButton className={className} onClick={this.handlers.handleClick}
        color="inherit"><HomeIcon /></IconButton>
    );
  }
}

export default withStyles(styles)(HomeButton);
