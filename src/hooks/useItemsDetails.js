import { useEffect, useState } from "react";

const useItemsDetails = (id) => {
  const [item, setItem] = useState({});
  const x = `http://localhost:5000/item/${id}`;
  console.log("X", x);
  useEffect(() => {
    const url = `http://localhost:5000/item/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return item;
};

export default useItemsDetails;
