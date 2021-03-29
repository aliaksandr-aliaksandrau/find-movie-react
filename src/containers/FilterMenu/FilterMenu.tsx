import * as React from "react";
import "./FilterMenu.scss";
import { FilterMenuItemModel } from "./FilterMenuItem/filter-menu-item.model";
import FilterMenuItem from "./FilterMenuItem/FilterMenuItem";

const menuConfig: FilterMenuItemModel[] = [
  { name: "All", filterOption: "" },
  { name: "Documentary", filterOption: "Documentary" },
  { name: "Comedy", filterOption: "Comedy" },
  { name: "Horror", filterOption: "Horror" },
  { name: "Crime", filterOption: "Crime" },
];

export default function FilterMenu(props: {
  setGenreFilter: Function;
  activeFilterOption: string;
}) {
  return (
    <div className="FilterMenu__container">
      <div className="FilterMenu__genre-filter">
        {menuConfig.map((item) => {
          return (
            <FilterMenuItem
              key={item.filterOption}
              item={item}
              setGenreFilter={props.setGenreFilter}
              isActive={props.activeFilterOption === item.filterOption}
            />
          );
        })}
      </div>
      <div className="FilterMenu__sorting">SORT BY</div>
    </div>
  );
}
