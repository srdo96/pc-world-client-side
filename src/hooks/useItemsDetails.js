import { useEffect, useState } from "react";

const useItemsDetails = (id) => {
  const [item, setItem] = useState({});
  const url = `https://stormy-spire-71562.herokuapp.com/item/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  // console.log(updateItem);
  return item;
};

export default useItemsDetails;
