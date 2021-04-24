import * as React from "react";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.scss";

export default function Header(props: { openAddMovieForm: Function }) {
  return (
    <div className="Header">
      <div className="Header__add-movie-button-container">
        <Logo />
        <button
          onClick={props.openAddMovieForm as any}
          className="Header__add-movie-button"
        >
          + ADD MOVIE
        </button>
      </div>
      {/* <img className="image" src={require('./collage.jpg')}></img> */}
      <p className="Header_title">FIND YOUR MOVIE</p>
      <SearchBar />
    </div>
  );
}
