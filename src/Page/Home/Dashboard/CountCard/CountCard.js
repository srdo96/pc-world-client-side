import React from "react";

const Card = ({ count }) => {
  return (
    <div className="shadow-lg rounded-2xl  p-4 bg-emerald-100 m-4 ">
      <p className="text-lg  text-gray-700 text-center font-medium">
        Total Items
      </p>
      <div className="flex flex-col justify-start">
        <p className="text-gray-800 text-5xl text-center  font-bold my-4">
          {count}
        </p>
      </div>
    </div>
  );
};

export default Card;
