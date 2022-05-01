import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { _id, img, name, desc, price, quantity, supplier, sold } = item;
  return (
    <div class="flex justify-center">
      <div class="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!">
          <img class="rounded-t-lg mx-auto" src={img} alt="" />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">{name}</h5>
          <p class="text-gray-700 text-base mb-4">
            {desc.slice(0, 100)}
            <span title={desc}>....</span>
          </p>

          <ul>
            <li className="text-xl">Qty: {quantity}</li>
            <li className="text-xl">Sold: {sold}</li>
            <li className="text-xl">Supplier: {supplier}</li>
            <li className="text-xl">Price: {price} BDT</li>
          </ul>
          <Link
            to={`/inventory/${_id}`}
            type="button"
            class=" mt-5 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
