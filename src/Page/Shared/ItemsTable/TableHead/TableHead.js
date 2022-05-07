import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import TableBody from "../TableBody/TableBody";

const TableHead = ({ items }) => {
  const pathName = window.location.pathname;
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(items);
  }, [items]);

  const handleDeleteItem = (id) => {
    const url = `http://localhost:5000/item/${id}`;
    const confirmation = window.confirm(
      "Are you sure, you want to delete this?"
    );

    if (confirmation) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((resData) => {
          const newData = data.filter((item) => item._id !== id);
          setData(newData);
          toast.success("Remove item successful");
        });
    }
  };
  return (
    <div>
      <div className="flex justify-end mt-14 mb-5 mr-9 ">
        <Link
          to="/addNewItem"
          type="button"
          className="py-2 px-4   bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          Add New Item
        </Link>
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Item Name
                    </th>
                    {pathName === "/manageInventories" && (
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Email
                      </th>
                    )}
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Sold
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Supplier
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      -
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <TableBody
                      key={item._id}
                      item={item}
                      index={index}
                      handleDeleteItem={handleDeleteItem}
                    ></TableBody>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableHead;
