import React from "react";
import {
  BsWind,
  BsDroplet,
  BsThermometerHalf,
  BsCloudHaze1,
} from "react-icons/bs";

const WeatherDetails = ({ data }) => {
  const { feels_like: feelsLike, humidity, pressure } = data.main;
  const speed = data.wind.speed;
  return (
    <div className="space-y-8">
      <h3 className="text-white text-lg">Weather Details</h3>
      <div className="flex flex-col gap-4 space-y-2 text-white pr-12">
        <div className="flex gap-2 font-light items-center">
          <BsThermometerHalf size={18} />
          Real feel
          <span className="font-medium ml-auto">{`${feelsLike}°`}</span>
        </div>
        <div className="flex gap-2 font-light items-center">
          <BsDroplet size={18} />
          Humidity
          <span className="font-medium ml-auto">{`${humidity}%`}</span>
        </div>
        <div className="flex gap-2 font-light items-center">
          <BsWind size={18} />
          Wind
          <span className="font-medium ml-auto">{`${speed} m/s`}</span>
        </div>
        <div className="flex gap-2 font-light items-center">
          <BsCloudHaze1 size={18} />
          Pressure
          <span className="font-medium ml-auto">{`${pressure} hPa`} </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
