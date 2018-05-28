import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
});

Object.setPrototypeOf(Greeting.prototype, React.Component.prototype);
function Greeting(props) {
  React.Component(props);
}

Greeting.prototype.render = function render() {
  let headline = this.props.headline && (
    <Typography variant="headline" component="h2">
      {this.props.headline}
    </Typography>
  );

  let message = this.props.message && (
    <Typography component="p">
      {this.props.message}
    </Typography>
  );

  return (
    <Paper className={this.props.classes.root} 
      elevation={this.props.elevation || 4}>
      {headline}
      {message}
    </Paper>
  );
}

export default withStyles(styles)(Greeting);
