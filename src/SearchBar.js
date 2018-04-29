import React from 'react';

Object.setPrototypeOf(SearchBar.prototype, React.Component.prototype);
export default function SearchBar(props) {
  React.Component(props);
}

SearchBar.prototype.render = function render() {
  return (
    <form action="http://google.com/search">
      <input type="text" name="q" id="search-query" />
      <input type="submit" value="google" />
    </form>
  );
}
