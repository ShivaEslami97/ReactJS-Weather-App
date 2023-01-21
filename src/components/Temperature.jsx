import React, { Fragment } from "react";

const Temperature = ({ data }) => {
  return (
    <Fragment>
      <div className="flex flex-wrap-reverse items-center text-white py-3">
        <div className="flex flex-col py-2 items-center text-xl text-[#0b212do] lg:py-6">
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt=""
            className="w-20"
          />
          <p>{data.weather[0].main}</p>
        </div>

        <p className="text-7xl">{`${data.main.temp.toFixed()}°`}</p>
      </div>
    </Fragment>
  );
};

export default Temperature;
