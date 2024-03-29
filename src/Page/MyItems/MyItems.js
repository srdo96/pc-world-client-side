import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import TableHead from "../Shared/ItemsTable/TableHead/TableHead";

const MyItems = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const email = user.email;

  let from = location.state?.from?.pathname || "/signin";

  useEffect(() => {
    fetch("https://pc-world-server-side-production.up.railway.app/myitems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Forbidden access") {
          window.onload = signOut(auth);
          navigate(from, { replace: true });
          toast.error(
            "Social JWT Auth not implement yet. Try with Email login instead."
          );
        } else {
          setItems(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return <TableHead items={items} loading={loading} />;
};

export default MyItems;
