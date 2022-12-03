import { useEffect, useState } from "react";

const useItemsDetails = (id) => {
  const [item, setItem] = useState({});
  const url = `https://pc-world-server-side-production.up.railway.app/item/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  // console.log(updateItem);
  return item;
};

export default useItemsDetails;
