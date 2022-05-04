import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useItemsDetails from "../../../hooks/useItemsDetails";

const Inventory = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [itemQty, setItemQty] = useState(0);
  const [updateItemQty, setUpdateItemQty] = useState({ quantity: 11 });
  const url = `http://localhost:5000/item/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setItemQty(data.quantity);
      });
  }, []);
  // console.log("log item", itemQty);
  const handleDelivered = () => {
    // console.log("item.qunti:", itemQty);
    if (itemQty > 0) {
      // setItemQty(item.quantity - 1);
      const newQty = itemQty - 1;
      setItemQty(newQty);
      // const newQty = itemQty - 1;
      // setItemQty(newQty);
      const updateInfo = { quantity: newQty };
      // console.log(typeof qty, qty);
      console.log("Update-info", updateInfo, "&", updateInfo.quantity);
      setUpdateItemQty(updateInfo);
      console.log("Update-Qty", updateItemQty, "&", updateItemQty.quantity);
      console.log("updateQ", updateItemQty);
      // const url = `http://localhost:5000/data/${id}`;
      // console.log(updateItemQty);
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateItemQty),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className="pt-6">
      <div className=" mx-auto sm:px-6 lg:max-w-7xl lg:px-6 md:px-6 sm:rounded-lg lg:aspect-w-3 ">
        <img
          src="https://i.ibb.co/k36NYpS/AMD-Ryzen-7-3700-X-Processor-xl.jpg"
          // src={item.img}
          alt={item.name}
          className=" object-center object-cover"
        />
        {/* </div> */}
      </div>
      {/* Product info */}
      <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            {item.name}
          </h1>
        </div>

        {/* Details */}
        <div className="mt-4 lg:mt-0 lg:row-span-3">
          {/* <h2 className="sr-only">Product information</h2> */}
          <p className="text-2xl text-gray-900">Price: {item.price} BDT</p>
          <p className="text-2xl text-gray-900">Quantity: {itemQty}</p>
          <p className="text-2xl text-gray-900">Sold: {item.sold}</p>
          <p className="text-2xl text-gray-900">Supplier {item.supplier}</p>

          <button
            onClick={handleDelivered}
            className="mt-5 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex datas-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Delivered
          </button>

          <form className="mt-4 border-t-2 border-gray-200">
            <h1 className="text-2xl mt-3 ">Restock the data</h1>
            <div className=" relative ">
              <input
                type="number"
                id="qty"
                className="mt-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Quantity"
              />
            </div>
            <button
              type="submit"
              className="uppercase mt-5 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex datas-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Stock
            </button>
          </form>
        </div>

        <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">{item.desc}</p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Key Features</h3>

            <div className="mt-4">
              <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                {/* <li key={} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;