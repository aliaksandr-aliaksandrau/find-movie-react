import * as React from "react";
import { useDispatch } from "react-redux";
import { Movie } from "../../components/MovieCard";
import {
  initSortFilterMovies,
  setSortingValue,
} from "../../store/action-creators";
import "./FilterMenu.scss";
import { FilterMenuItemModel } from "./FilterMenuItem/filter-menu-item.model";
import FilterMenuItem from "./FilterMenuItem/FilterMenuItem";

const genreMenuConfig: FilterMenuItemModel[] = [
  { name: "All", filterOption: "" },
  { name: "Documentary", filterOption: "Documentary" },
  { name: "Comedy", filterOption: "Comedy" },
  { name: "Horror", filterOption: "Horror" },
  { name: "Crime", filterOption: "Crime" },
];

const sortOptionsConfig: { name: string; filterOption: keyof Movie }[] = [
  { name: "Release date", filterOption: "releaseDate" },
  { name: "Rating", filterOption: "rating" },
];

export default function FilterMenu() {
  const dispatch = useDispatch();

  dispatch(setSortingValue(sortOptionsConfig[0].filterOption));

  function onSelectSortItem(event: any) {
    dispatch(setSortingValue(event.target.value));
    dispatch(initSortFilterMovies());
  }

  return (
    <div className="FilterMenu__container">
      <div className="FilterMenu__genre-filter">
        {genreMenuConfig.map((item) => {
          return <FilterMenuItem key={item.filterOption} item={item} />;
        })}
      </div>
      <div className="FilterMenu__sorting">
        <span className="FilterMenu__sorting-title">SORT BY</span>
        <select 
          onChange={onSelectSortItem}
          className="FilterMenu__sorting-dropdown"
        >
          {sortOptionsConfig.map((item) => {
            return (
              <option value={item.filterOption} key={item.filterOption}>
                {item.name.toLocaleUpperCase()}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
