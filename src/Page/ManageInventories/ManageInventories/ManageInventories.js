import React from "react";
import useGetAllItems from "../../../hooks/useGetAllItems";
import TableHead from "../../Shared/ItemsTable/TableHead/TableHead";

const ManageInventories = () => {
  const [items] = useGetAllItems([]);
  return <TableHead items={items} />;
};

export default ManageInventories;
