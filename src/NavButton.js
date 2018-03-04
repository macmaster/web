import React from 'react';
import Button from 'material-ui/Button';

export default function NavButton (props) {
  return (
    <Button variant="raised" color="primary" href={props.href}>
      {new URL(props.href).hostname}
    </Button>
  );
}
