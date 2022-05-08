import React from "react";
import useGetAllItems from "../../../hooks/useGetAllItems";
import Chart from "../Chart/Chart/Chart";

const Analytics = () => {
  return (
    <div id="analytics">
      <h1 className="text-5xl font-bold text-gray-900 text-center mb-3 ">
        Analytics
      </h1>
      <div className="flex justify-center">
        <Chart />
      </div>
    </div>
  );
};

export default Analytics;
