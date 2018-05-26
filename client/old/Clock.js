import React from "react";
import Button from "material-ui/Button";

Object.setPrototypeOf(Clock.prototype, React.Component.prototype);
export default function Clock(props) {
  React.Component(props);
  this.period = props.period || 1000
  this.state = {
    date: new Date(),
  }
}

Clock.prototype.tick = function tick() {
  this.setState({
    date: new Date()
  });
}

Clock.prototype.componentDidMount = function componentDidMount() {
  this.timerId = setInterval(() => this.tick(), this.period);
}

Clock.prototype.componentWillUnmount = function componentWillUnmount() {
  clearInterval(this.timerId);
}

Clock.prototype.render = function render() {
  return (
    <Button variant="raised" color="primary">
      {this.state.date.toUTCString()}
    </Button>
  );
}
