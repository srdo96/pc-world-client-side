import { useEffect, useState } from "react";

const useGetAllItems = () => {
  const [data, setData] = useState([]);

  const fetchItems = () => {
    fetch("https://stormy-spire-71562.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return [data, setData];
};

export default useGetAllItems;
