import * as React from "react";
import { useState } from "react";
import "./SearchBar.scss";

export default function Search(props: { searchMovie: Function }) {
  const [searchText, setSearchText] = useState("");

  const submitSearch = (event: any) => {
    props.searchMovie(searchText);
    event.preventDefault();
  };
  const changeSearchValue = (event: any) => setSearchText(event.target.value);

  return (
    <form className="SearchBar" onSubmit={submitSearch}>
      <input
        onChange={changeSearchValue}
        className="searchInput"
        type="text"
        name="search"
        placeholder="What do you want to watch?"
      ></input>

      <input className="searchButton" type="submit" value="Search" />
    </form>
  );
}
