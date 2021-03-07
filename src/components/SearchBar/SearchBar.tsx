import * as React from "react";
import "./SearchBar.scss";

export default () => (
  <div className="SearchBar">
    <input className="searchInput" type="text" name="search" placeholder="What do you want to watch?"></input>
    <button className="searchButton">SEARCH</button>
  </div>
);