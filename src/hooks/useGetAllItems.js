import { useEffect, useState } from "react";

const useGetAllItems = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = () => {
    fetch("https://pc-world-server-side-production.up.railway.app/items")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return [data, loading];
};

export default useGetAllItems;
