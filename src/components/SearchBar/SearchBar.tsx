import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  initSortFilterMovies,
  setSearchText,
} from "../../store/action-creators";
import "./SearchBar.scss";

export default function Search() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const submitSearch = (event: any) => {
    event.preventDefault();

    dispatch(setSearchText(search));
    dispatch(initSortFilterMovies());
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
