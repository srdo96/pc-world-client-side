import React from "react";
import toast from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const AddNewItem = () => {
  const [user] = useAuthState(auth);
  const handleAddItem = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const desc = e.target.desc.value;
    const price = e.target.price.value;
    const qty = e.target.qty.value;
    const sold = e.target.sold.value;
    const supplier = e.target.supplier.value;
    const imgUrl = e.target.imgUrl.value;
    e.target.reset();
    const newItem = {
      name: name,
      img: imgUrl,
      desc: desc,
      price: price,
      quantity: qty,
      supplier: supplier,
      sold: sold,
      email: user.email,
    };

    fetch("http://localhost:5000/addnewitem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("New item added.");
        console.log("Success:", data);
      });
  };
  return (
    <form onSubmit={handleAddItem}>
      <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
        <div className="px-4 py-8 sm:px-10">
          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm leading-5">
              <span className="px-2 text-gray-500 bg-white text-xl">
                Add New Item
              </span>
            </div>
          </div>

          <div className="mt-6">
            <div className="w-full space-y-6">
              <div className="w-full">
                <div className=" relative ">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    id="name"
                    className=" border-solid  rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Item Name"
                    required
                  />
                </div>
              </div>
              <div className="w-full">
                <div className=" relative ">
                  <label htmlFor="">Description</label>
                  <textarea
                    type="textarea"
                    id="desc"
                    className=" border-solid  rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Description"
                    required
                  />
                </div>
              </div>
              <div className="w-full">
                <div className=" relative ">
                  <label htmlFor="">Price</label>
                  <input
                    type="number"
                    id="price"
                    className=" border-solid  rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Price $$"
                    required
                  />
                </div>
              </div>
              <div className="w-full">
                <div className=" relative ">
                  {" "}
                  <label htmlFor="">Quantity</label>
                  <input
                    type="number"
                    id="qty"
                    className=" border-solid  rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Quantity"
                    required
                  />
                </div>
              </div>
              <div className="w-full">
                <div className=" relative ">
                  {" "}
                  <label htmlFor="">Sold</label>
                  <input
                    type="number"
                    id="sold"
                    className=" border-solid  rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Sold"
                    required
                  />
                </div>
              </div>
              <div className="w-full">
                <div className=" relative ">
                  {" "}
                  <label htmlFor="">Supplier name</label>
                  <input
                    type="text"
                    id="supplier"
                    className=" border-solid  rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Supplier name"
                    required
                  />
                </div>
              </div>
              <div className="w-full">
                <div className=" relative ">
                  {" "}
                  <label htmlFor="">Img url</label>
                  <input
                    type="url"
                    id="imgUrl"
                    className=" border-solid  rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Item image url"
                    required
                  />
                </div>
              </div>
              <div>
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className=" bg-green-500  border-solid  rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4  text-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    Add item
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
          <p className="text-xs leading-5 text-gray-500 text-center">
            Re-check your data carefully before add
          </p>
        </div>
      </div>
    </form>
  );
};

export default AddNewItem;
