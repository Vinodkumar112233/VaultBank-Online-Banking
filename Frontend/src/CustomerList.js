import React from "react";
import CustomerItem from "./CustomerItem";

function CustomerList({ customers, onEdit, onDelete }) {
  return (
    <section className="customer-table-wrapper">
      <h2>Customer Details</h2>

      {customers.length === 0 ? (
        <p>No customers found. Add your first customer.</p>
      ) : (
        <table className="customer-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <CustomerItem
                key={customer.id}
                customer={customer}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default CustomerList;