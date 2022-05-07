import React, { useEffect, useState } from "react";
import Card from "../CountCard/CountCard";
import TopSellCard from "../TopSellCard/TopSellCard";

const DashboardLayout = () => {
  const [count, setCount] = useState(0);
  const [topSOld, setTopSold] = useState([]);

  //   fetch total item number
  useEffect(() => {
    fetch("http://localhost:5000/count")
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
      });
  }, []);

  //   fetch Top Sold items
  useEffect(() => {
    fetch("http://localhost:5000/sortSold")
      .then((res) => res.json())
      .then((data) => {
        setTopSold(data);
      });
  }, []);
  return (
    <div id="dashboard" className="mt-7 mb-10">
      <h1 className="text-5xl font-bold text-gray-900 text-center mb-3 ">
        Dashboard
      </h1>
      <div className="max-w-7xl  mx-auto py-6 sm:px-6 lg:px-8 border-4 border-dashed rounded-2xl">
        <Card count={count} />
        <div>
          <h1 className="text-2xl my-5 mt-10">Top 3 selling items</h1>
          <div className="grid  md:grid-cols-3 lg:grid-cols-3 ">
            {topSOld.map((item) => (
              <TopSellCard key={item._id} item={item}></TopSellCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
