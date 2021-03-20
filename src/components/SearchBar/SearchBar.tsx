import * as React from "react";
import "./SearchBar.scss";

class Search extends React.Component<any, any> {
  constructor(props: { searchMovie: Function }) {
    super(props);
    this.state = { searchText: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({ searchText: event.target.value });
  }

  handleSubmit(event: any) {
    this.props.searchMovie(this.state.searchText);
    event.preventDefault();
  }

  render() {
    return (
      <form className="SearchBar" onSubmit={this.handleSubmit}>
        <input
          value={this.state.searchText}
          onChange={this.handleChange}
          className="searchInput"
          type="text"
          name="search"
          placeholder="What do you want to watch?"
        ></input>

        <input className="searchButton" type="submit" value="Search" />
      </form>
    );
  }
}
export default Search;
