import React from "react";
import banner from "../../../img/cover/banner2.jpg";
const Banner = () => {
  return (
    <div id="home" className="relative ">
      <img className="rounded shadow-xl" src={banner} alt="" />

      <div
        className={`absolute bottom-10 py-5 text-xl  rounded-b-md  w-full text-white font-normal`}
      >
        <div className="text-center">
          <h1 className="text-7xl ">
            PC For Home and Office <br /> PC WORLD
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
