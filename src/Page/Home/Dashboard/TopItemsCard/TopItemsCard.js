import React from "react";

const TopItemsCard = ({ item }) => {
  const { img, name, quantity } = item;
  return (
    <div className="my-3  grid grid-cols-5 md:block lg:block  rounded-lg shadow-lg bg-white max-w-sm mx-3 ">
      <div className="col-span-1 lg:flex lg:justify-center ">
        <img
          className=" w-13 md:w-2/5 lg:w-2/5 mx-auto object-cover  h-13"
          src={img}
          alt={name}
        />
      </div>
      <div className="col-span-4 grid grid-cols-5 md:block lg:block px-6 py-2">
        <h5 className="col-span-3 text-gray-900 text-sm lg:text-center md:text-center font-medium content-center items-center mb-2">
          {name}
        </h5>
        <p className="col-span-2 lg:text-5xl text-2xl lg:font-bold md:text-center lg:text-center ml-2">
          {quantity}{" "}
          <span className="text-lg  text-gray-500 font-medium">pcs</span>
        </p>
      </div>
    </div>
  );
};

export default TopItemsCard;
