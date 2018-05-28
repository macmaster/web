import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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
  title: {
    textAlign: "center",
  },
  thumbnail: {
    textAlign: "center",
    display: "block",
  },
});

VideoTable.prototype.componentDidMount = function componentDidMount() {
  setTimeout(() =>
  this.setState((prev, props) => ({
    isLoaded: true,
    rows: props.rows,
  })), 0);
}

VideoTable.prototype.render = function render() {
  const { classes, callback } = this.props;
  const { handleClick } = this.handlers;

  let columns = (
    <TableRow>{this.props.columns.map(
      column => <TableCell key={column}>{column}</TableCell>
    )}</TableRow>
  );

  let rows = this.state.rows.map(
    (row, index) => 
      <TableRow key={index}>
        <TableCell className={classes.cell}>
          <a onClick={handleClick.bind(null, row.name, row.video)}
            className={classes.thumbnail} href={row.video}> 
            <h2 className={classes.title}>{row.name}</h2>
            <img src={row.image} /> 
          </a>
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
    <Paper className={classes.root}>
      {this.state.isLoaded ? table : loading}
    </Paper>
  );
}

export default withStyles(styles)(VideoTable);
