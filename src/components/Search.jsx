import React, { Fragment, useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { GEO_API_KEY, GEO_API_URL } from "../services/services";
import LoadingSpinner from "./Loading/LoadingSpinner";
import SearchSuggestions from "./SearchSuggestions";

const Search = ({ units, setUnits, onCityChange }) => {
  const [searchData, setSearchData] = useState("");
  const [suggestions, setSuggestion] = useState(null);
  const { isLoading, fetchData } = useFetch();

  useEffect(() => {
    const transformData = (cities) => {
      const loadedCities = {
        options: cities.data.map((city) => {
          return {
            id: city.id,
            countryCode: `${city.countryCode}`,
            name: `${city.name}`,
          };
        }),
      };
      setSuggestion({ ...loadedCities });
    };

    const debouncer = setTimeout(() => {
      if (searchData.trim() !== "") {
        fetchData(
          {
            url: `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${searchData}&sort=-population&types=CITY`,
            headers: {
              "X-RapidAPI-Key": `${GEO_API_KEY}`,
              "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
            },
          },
          transformData
        );
      }
    }, 1500);
    return () => {
      console.log("re-render");
      clearTimeout(debouncer);
    };
  }, [fetchData, searchData]);

  const handleOnChange = (event) => {
    setSearchData(event.target.value.replace(/^\s/g, ""));
  };
  const handleSuggestionOnClick = useCallback(
    (val) => {
      onCityChange(val);
      setSuggestion(null);
      setSearchData(val);
    },
    [onCityChange]
  );
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <Fragment>
      <div className="flex items-end justify-between gap-12">
        <div className="relative w-2/3 ">
          <input
            type="text"
            className="input-control"
            placeholder="Search..."
            value={searchData}
            onChange={handleOnChange}
            onBlur={() => {
              setTimeout(() => {
                setSuggestion(null);
              }, 100);
            }}
          />
          {isLoading && <LoadingSpinner />}
          {suggestions && (
            <SearchSuggestions
              onCityChange={handleSuggestionOnClick}
              cityOptions={suggestions}
            />
          )}
        </div>

        <div
          type="submit"
          className="text-slate-200 w-16 h-16 flex justify-center items-center bg-[#0b212d]"
        >
          <button
            name="metric"
            className={`${units === "metric" ? "text-[#56aad8]" : ""}`}
            onClick={handleUnitsChange}
            type="button"
          >
            °C
          </button>
          <span className="text-xl text-white mx-1">|</span>
          <button
            name="imperial"
            className={`${units === "imperial" ? "text-[#56aad8]" : ""}`}
            onClick={handleUnitsChange}
            type="button"
          >
            °F
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
