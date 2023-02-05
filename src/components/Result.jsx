import React from "react";
import Temperature from "./Temperature";
import TimeAndLocation from "./TimeAndLocation";

const Result = ({ data }) => {
  return (
    <section className="container flex flex-col justify-center items-center px-7 mx-auto h-fit py-5 lg:justify-around lg:items-start lg:flex-row lg:h-screen">
      <Temperature data={data} />
      <TimeAndLocation data={data} />
    </section>
  );
};

export default Result;
