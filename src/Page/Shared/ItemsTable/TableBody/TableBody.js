import React from "react";
import { useNavigate } from "react-router-dom";
import "./TableBody.css";

const TableBody = ({ item, index, handleDeleteItem }) => {
  const pathName = window.location.pathname;
  const navigate = useNavigate();

  // go to inventory item
  const handleTR = () => {
    const url = `/inventory/${item._id}`;
    navigate(url, { replace: true });
  };

  return (
    <tr
      onClick={handleTR}
      style={{ cursor: "pointer" }}
      className="bg-white border-b hover:bg-gray-50"
    >
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
        {index + 1}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {item?.name}
      </td>
      {pathName === "/manageInventories" && (
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {item?.email}
        </td>
      )}
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        $ {item?.price}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {item?.quantity}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {item?.sold}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {item?.supplier}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
        <button onClick={() => handleDeleteItem(item._id)}>
          <svg
            id="trashIcon"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default TableBody;
