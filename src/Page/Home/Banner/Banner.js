import React from "react";
import banner from "../../../img/cover/banner2.jpg";
const Banner = () => {
  return (
    <div id="home" className="relative ">
      <img className="rounded shadow-xl" src={banner} alt="" />

      <div
        className={`absolute bottom-0 md:py-5  rounded-b-md  w-full text-white font-normal`}
      >
        <div className="text-center bg-black bg-opacity-60 sm:py-5 py-10">
          <h1 className="sm:text-xl md:text-5xl font-medium ">
            Buy Your Next PC From PC WORLD
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
