import React from 'react';
import Button from 'material-ui/Button';

Object.setPrototypeOf(NavButton.prototype, React.Component.prototype);
export default function NavButton(props) {
  React.Component(props);
  this.state = {
    href: props.href,
    hostname: new URL(props.href).hostname
  }
}

NavButton.prototype.render = function render() {
  const style = {
    background: 'linear-gradient(135deg, red 80%, orange 90%)',
    textTransform: 'lowercase',
  };

  return (
    <Button style={style} variant="raised" color="primary" href={this.state.href}>
      {this.state.hostname}
    </Button>
  );
}
