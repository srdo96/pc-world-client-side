import React from "react";
import Analytics from "../Analytics/Analytics";
import Banner from "../Banner/Banner";
import DashboardLayout from "../Dashboard/DashboardLayout/DashboardLayout";
import Items from "../Items/Items";

const Home = () => {
  return (
    <div>
      <Banner />
      <Items />
      <DashboardLayout />
      <Analytics />
    </div>
  );
};

export default Home;
