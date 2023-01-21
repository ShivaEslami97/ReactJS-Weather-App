import React from "react";
import Search from "./Search";
import TopButtons from "./CityButtons";
import WeatherDetails from "./WeatherDetails";

const Sidebar = ({ data, onCityChange, units, setUnits }) => {
  return (
    <div className="sidebar pl-12">
      <Search units={units} setUnits={setUnits} onCityChange={onCityChange} />
      <TopButtons onCityChange={onCityChange} />
      <div
        className="border-solid 
        border-b-[1px] border-b-slate-400 w-[92%] my-9"
      ></div>
      {data && <WeatherDetails data={data} />}
    </div>
  );
};

export default Sidebar;
