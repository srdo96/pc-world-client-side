import { useEffect, useState } from "react";

const useItemsDetails = (id) => {
  const [item, setItem] = useState({});
  const url = `http://localhost:5000/item/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  // console.log(updateItem);
  return item;
};

export default useItemsDetails;
