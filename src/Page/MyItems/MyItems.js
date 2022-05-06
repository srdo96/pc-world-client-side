import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import TableHead from "../Shared/ItemsTable/TableHead/TableHead";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const email = user.email;
  console.log("e", email);
  console.log("my items", items);
  useEffect(() => {
    fetch("http://localhost:5000/myitems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // return <div></div>;
  return <TableHead items={items} />;
};

export default MyItems;
