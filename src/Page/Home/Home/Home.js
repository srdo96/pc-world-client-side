import React from "react";
import Banner from "../Banner/Banner";
import DashboardLayout from "../Dashboard/DashboardLayout/DashboardLayout";
import Items from "../Items/Items";

const Home = () => {
  return (
    <div>
      <Banner />
      <Items />
      <DashboardLayout />
    </div>
  );
};

export default Home;
