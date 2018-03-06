import React from "react";
import Button from "material-ui/Button";

Object.setPrototypeOf(Clock.prototype, React.Component.prototype);
export default function Clock(props) {
  React.Component(props);
  this.state = {
    date: new Date()
  }
}

Clock.prototype.render = function render() {
  return (
    <Button variant="raised" color="primary">
      {this.state.date.toUTCString()}
    </Button>
  );
}
