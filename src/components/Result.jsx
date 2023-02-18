import React from "react";
import Loading from "./Loading/Loading";
import Temperature from "./Temperature";
import TimeAndLocation from "./TimeAndLocation";

const Result = ({ data, isLoading }) => {
  let result = (
    <>
      <Temperature data={data} />
      <TimeAndLocation data={data} />
    </>
  );

  if (isLoading) {
    result = <Loading />;
  }
  if (!data && !isLoading) {
    result = (
      <p className="text-2xl py-3 text-white">No data found, Try again!</p>
    );
  }

  return (
    <section className="container flex flex-col justify-center items-center px-7 mx-auto h-fit py-5 lg:justify-around lg:items-start lg:flex-row lg:h-screen">
      {result}
    </section>
  );
};

export default Result;
