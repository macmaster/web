import React from "react";
import { withStyles } from "material-ui/styles";

import IconButton from "material-ui/IconButton";
import Menu, { MenuItem } from "material-ui/Menu";
import MenuIcon from "@material-ui/icons/Menu";

Object.setPrototypeOf(NavMenu.prototype, React.Component.prototype);
function NavMenu(props) {
  React.Component(props);
  this.state = {
    anchorEl: null,
  };

  this.handlers = {
    handleClick: (e) => {
      this.setState({ anchorEl: this.props.anchor || e.currentTarget});
    },
    handleClose: (option, e) => {
      console.log("option: " + option);
      this.setState({ anchorEl: null });
    },
  };
}

const styles = {
  root: {
  },
  menuButton: {
    marginRight: 10,
  },
};

NavMenu.prototype.render = function render() {
  const { classes } = this.props;
  const { anchorEl } = this.state;
  const { handleClick, handleClose } = this.handlers;

  let menuItems = this.props.options.map(option =>
    <MenuItem key={option.name} onClick={handleClose.bind(this, option.name)}>
      {option.name}
    </MenuItem>
  );

  return (
    <div classes={classes.root}>
      <IconButton onClick={handleClick} className={classes.menuButton} color="inherit">
        <MenuIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose.bind(this, null)}>
        {menuItems}
      </Menu>
    </div>
  );
}

export default withStyles(styles)(NavMenu);
