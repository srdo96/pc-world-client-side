import React, { useEffect, useState } from "react";
const Items = () => {
  const [data, setData] = useState("");

  const fetchItems = async () => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div id="items" className="text-center mt-10">
      <h1 className="text-3xl h-screen">All Items {data.length} </h1>
    </div>
  );
};

export default Items;
