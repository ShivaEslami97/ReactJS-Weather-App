import React from "react";
import Temperature from "./Temperature";
import TimeAndLocation from "./TimeAndLocation";

const Result = ({ data }) => {
  return (
    <section className="container flex justify-around items-start px-7 mx-auto h-fit py-5 lg:h-screen">
      <Temperature data={data} />
      <TimeAndLocation data={data} />
    </section>
  );
};

export default Result;
