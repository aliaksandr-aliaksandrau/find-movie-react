import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./FilterMenuItem.scss";
import {
  initSortFilterMovies,
  setGenreFilter,
} from "../../../store/action-creators";
import { State } from "../../../store/initialState";
import { FilterMenuItemModel } from "./filter-menu-item.model";

export default function FilterMenuItem(props: { item: FilterMenuItemModel }) {
  const item = props.item;

  const dispatch = useDispatch();

  function setFilter() {
    dispatch(setGenreFilter(item.filterOption));
    dispatch(initSortFilterMovies());
  }

  const genreFilter = useSelector((state: State) => state.genreFilter);

  return (
    <div className="FilterMenuItem__container">
      <span
        className={
          item.filterOption === genreFilter ? "FilterMenuItem__title" : null
        }
        onClick={setFilter}
      >
        {item.name.toLocaleUpperCase()}
      </span>
    </div>
  );
}
