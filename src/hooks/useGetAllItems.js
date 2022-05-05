import { useEffect, useState } from "react";

const useGetAllItems = () => {
  const [data, setData] = useState([]);

  const fetchItems = () => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return [data];
};

export default useGetAllItems;
