import React from "react";

function CustomerItem({ customer, onEdit, onDelete }) {
  return (
    <tr>
      <td>{customer.id}</td>
      <td>{customer.name}</td>
      <td>{customer.email}</td>
      <td>{customer.phone}</td>

      <td className="actions">
        <button
          type="button"
          className="edit-btn"
          onClick={() => onEdit(customer)}
        >
          Edit
        </button>

        <button
          type="button"
          className="delete-btn"
          onClick={() => onDelete(customer.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default CustomerItem;