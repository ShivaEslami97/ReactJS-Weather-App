import React from "react";

const TopButtons = ({ onCityChange }) => {
  const cities = [
    {
      id: 1,
      title: "Tabriz",
    },
    {
      id: 2,
      title: "Tehran",
    },
    {
      id: 3,
      title: "Rasht",
    },
    {
      id: 4,
      title: "London",
    },
  ];

  return (
    <div className="max-w-screen-md mx-auto flex flex-col items-start mt-9 gap-5">
      {cities.map((city) => (
        <button
          key={city.id}
          onClick={() => onCityChange(city.title)}
          className="text-slate-400 text-lg font-medium transition-all duration-300 hover:text-white"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
