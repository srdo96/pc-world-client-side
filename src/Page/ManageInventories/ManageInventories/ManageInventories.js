import React from "react";
import useGetAllItems from "../../../hooks/useGetAllItems";
import TableHead from "../../Shared/ItemsTable/TableHead/TableHead";
import Loading from "../../Shared/Loading/Loading";

const ManageInventories = () => {
  const [items, loading] = useGetAllItems([]);

  if (loading) {
    return <Loading />;
  }

  return <TableHead items={items} />;
};

export default ManageInventories;
