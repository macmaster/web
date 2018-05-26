import React from "react";

import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Table from "material-ui/Table";
import { TableBody, TableCell, TableHead, TableRow } from "material-ui/Table";

Object.setPrototypeOf(VideoTable.prototype, React.Component.prototype);
function VideoTable(props) {
  React.Component(props);
  this.state = {
    isLoaded: false,
    error: null,
    rows: [],
  };

  this.handlers = {
    handleClick: (name, video, e) => {
      this.props.callback(name, video, e);
    },
  };
}

const styles = theme => ({
  root: {
    width: "100%",
  },
});

VideoTable.prototype.componentDidMount = function componentDidMount() {
  console.log(this.props);
  setTimeout(() =>
  this.setState((prev, props) => ({
    isLoaded: true,
    rows: props.rows,
  })), 0);
}

VideoTable.prototype.render = function render() {
  const { classes, callback, elevation } = this.props;
  const { handleClick } = this.handlers;

  let columns = (
    <TableRow>{this.props.columns.map(
      column => <TableCell key={column}>{column}</TableCell>
    )}</TableRow>
  );

  let rows = this.state.rows.map(
    (row, index) => 
      <TableRow key={index}>
        <TableCell>{row.video}</TableCell>
        <TableCell>
          <a onClick={handleClick.bind(null, row.name, row.video)} 
            href={row.video}>{row.name}</a>
        </TableCell>
      </TableRow>
  );

  let table = (
    <Table className={classes.table}>
      <TableHead>{columns}</TableHead>
      <TableBody>{rows}</TableBody>
    </Table>
  );

  let loading = <p>loading...</p>;

  return (
    <Paper className={classes.root} elevation={elevation || 4}>
      {this.state.isLoaded ? table : loading}
    </Paper>
  );
}

export default withStyles(styles)(VideoTable);
