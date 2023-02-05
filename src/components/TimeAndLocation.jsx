import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { getTime } from "../services/services";

const TimeAndLocation = ({ data }) => {
  const { todayDate, currTime } = getTime(data.timezone);
  const { temp_max: tempMax, temp_min: tempMin } = data.main;

  return (
    <div className="flex flex-col my-6">
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-5xl font-medium">
          {`${data.name}, ${data.sys.country}`}
        </p>
      </div>
      <p className="text-white text-xl text-center font-extralight">
        {`${todayDate} | local time: ${currTime} `}
      </p>
      <div className="flex flex-row items-center justify-center space-x-2 text-white py-3">
        <AiOutlineArrowUp size={20} />
        <p className="font-light">
          High:
          <span className="font-medium ml-1">{`${tempMax.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>
        <AiOutlineArrowDown size={20} />
        <p className="font-light">
          Low:
          <span className="font-medium ml-1">{`${tempMin.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
