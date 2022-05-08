import React from "react";
import { Link } from "react-router-dom";
import useGetAllItems from "../../../hooks/useGetAllItems";
import Card from "../Card/Card";
const Items = () => {
  const [data] = useGetAllItems([]);

  return (
    <div id="items" className=" mt-10">
      <div className="grid items-center  lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-y-10">
        {data.map(
          (item) =>
            data.indexOf(item) < 6 && <Card key={item._id} item={item} />
        )}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          to="/manageInventories"
          type="submit"
          className=" mt-5 bg-indigo-600 border border-transparent rounded-md py-3 px-24 flex  justify-center text-lg font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Manage Inventories
        </Link>
      </div>
    </div>
  );
};

export default Items;
