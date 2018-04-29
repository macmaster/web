import React from "react";

Object.setPrototypeOf(Table.prototype, React.Component.prototype);
export default function Table(props) {
  React.Component(props);
  this.state = {
    rows: props.rows || [],
  };
}

Table.prototype.setRows = function setRows(rows) {
  this.setState({ rows });
}
  
Table.prototype.render = function render() {
  let columns = (
    <tr>{this.props.columns.map(col => <th>{col}</th>)}</tr>
  );

  let rows = this.state.rows.map(
    row => <tr>{this.props.columns.map(col => <td>{row[col]}</td>)}</tr>
  );

  return (
    <table>
      <thead>{columns}</thead>
      <tbody>{rows}</tbody>
    </table>
  );
} 
