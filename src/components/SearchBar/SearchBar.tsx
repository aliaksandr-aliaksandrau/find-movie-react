import * as React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import "./SearchBar.scss";

export default function Search() {
  const [search, setSearch] = useState("");

  const history = useHistory();

  const submitSearch = (event: any) => {
    event.preventDefault();

    history.push(`?search=${search}`, { search });
  };

  const changeSearchValue = (event: any) => setSearch(event.target.value);

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
