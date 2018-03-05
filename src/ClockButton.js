import React from "react";
import Button from "material-ui/Button";

export default function Clock() {
  return (
    <Button variant="raised" color="primary">
      {new Date().toUTCString()}
    </Button>
  );
}

