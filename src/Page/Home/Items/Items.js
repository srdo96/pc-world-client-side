import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
const Items = () => {
  const [data, setData] = useState([]);

  const fetchItems = async () => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div id="items" className=" mt-10">
      <h1 className="text-3xl text-center ">All Items {data.length} </h1>
      <div className="grid grid-cols-3 gap-y-10">
        {data.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Items;
