import * as React from "react";
import { FilterMenuItemModel } from "./filter-menu-item.model";
import "./FilterMenuItem.scss";

export default function FilterMenuItem(props: {
  item: FilterMenuItemModel;
  setGenreFilter: Function;
  isActive: boolean;
}) {
  const item = props.item;

  const setFilter: any = () => {
    props.setGenreFilter(item.filterOption);
  };

  return (
    <div className="FilterMenuItem__container">
      <span>{props.isActive}</span>
      <span
        className={props.isActive ? "FilterMenuItem__title" : null}
        onClick={setFilter}
      >
        {props.isActive}
        {item.name.toLocaleUpperCase()}
      </span>
    </div>
  );
}
