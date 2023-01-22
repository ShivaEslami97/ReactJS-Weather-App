import React, { memo } from "react";

const SearchSuggestions = memo(function SearchSuggestions({
  cityOptions,
  onCityChange,
}) {
  const options = cityOptions.options;
  const notFound = <p>City not Found</p>;

  return (
    <div className="suggestionsBox px-2 py-4 absolute w-full text-slate-300 shadow-md min-h-fit">
      <ul>
        {options?.length === 0
          ? notFound
          : options.map((city, index) => {
              return (
                <li
                  onClick={() => onCityChange(city.name)}
                  key={index}
                  className="p-1 cursor-pointer  transition-all duration-300 hover:text-[#56aad8]"
                >{`${city.name}, ${city.countryCode}`}</li>
              );
            })}
      </ul>
    </div>
  );
});

export default SearchSuggestions;
