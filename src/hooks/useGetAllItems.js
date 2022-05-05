import React, { useEffect, useState } from "react";

const useGetAllItems = () => {
  const [data, setData] = useState([]);

  const fetchItems = async () => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchItems();
  }, []);
  return data;
};

export default useGetAllItems;
