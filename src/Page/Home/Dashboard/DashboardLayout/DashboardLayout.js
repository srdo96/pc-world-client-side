import React, { useEffect, useState } from "react";
import Loading from "../../../Shared/Loading/Loading";
import CountCard from "../CountCard/CountCard";
import TopItemsCard from "../TopItemsCard/TopItemsCard";

const DashboardLayout = () => {
  const [count, setCount] = useState(0);
  const [topItems, setTopItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://stormy-spire-71562.herokuapp.com/sortQty")
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setTopItems(data.topItems);
        setLoading(false);
      });
  }, []);

  return (
    <div id="dashboard" className="mt-7 mb-10">
      <h1 className="text-5xl font-bold text-gray-900 text-center mb-3 ">
        Dashboard
      </h1>
      <div className="max-w-7xl  mx-auto py-6 sm:px-6 lg:px-8 border-4 border-dashed rounded-2xl">
        {loading ? (
          <Loading />
        ) : (
          <div>
            <CountCard count={count} />
            <div>
              <h1 className="text-2xl my-5 mt-10">Top Items</h1>
              <div className="grid  md:grid-cols-3 lg:grid-cols-3 ">
                {topItems.map((item) => (
                  <TopItemsCard key={item._id} item={item}></TopItemsCard>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;
