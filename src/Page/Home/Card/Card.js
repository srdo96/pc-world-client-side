import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { _id, img, name, desc, price, quantity, supplier, sold } = item;
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!">
          <img className="rounded-t-lg mx-auto" src={img} alt="" />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
          <p className="text-gray-700 text-base mb-4">
            {desc.slice(0, 100)}
            <span title={desc}>....</span>
          </p>

          <ul>
            <li className="text-xl">Qty: {quantity}</li>
            <li className="text-xl">Sold: {sold}</li>
            <li className="text-xl">Supplier: {supplier}</li>
            <li className="text-xl">Price: $ {price}</li>
          </ul>
          <Link
            to={`/inventory/${_id}`}
            type="button"
            className=" mt-5 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
