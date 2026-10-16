import React, {
  useCallback,
  useEffect,
  useState,
} from "react";

import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomerList";

import {
  getCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
} from "./customerService";

function CustomerPage() {
  const [customers, setCustomers] = useState([]);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const loadCustomers = useCallback(async () => {
    try {
      setError("");

      const data = await getCustomers();

      setCustomers(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || "Failed to load customers.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCustomers();
  }, [loadCustomers]);

  async function handleSubmit(customer) {
    setError("");
    setMessage("");

    try {
      if (editingCustomer) {
        await updateCustomer(editingCustomer.id, customer);

        setMessage("Customer updated successfully.");
        setEditingCustomer(null);
      } else {
        await addCustomer(customer);

        setMessage("Customer added successfully.");
      }

      await loadCustomers();
    } catch (err) {
      setError(err.message || "Failed to save customer.");
      throw err;
    }
  }

  async function handleDelete(id) {
    const confirmed = window.confirm(
      `Delete customer with ID ${id}?`
    );

    if (!confirmed) return;

    setError("");
    setMessage("");

    try {
      await deleteCustomer(id);

      if (editingCustomer?.id === id) {
        setEditingCustomer(null);
      }

      setMessage("Customer deleted successfully.");

      await loadCustomers();
    } catch (err) {
      setError(err.message || "Failed to delete customer.");
    }
  }

  function handleEdit(customer) {
    setEditingCustomer(customer);
    setError("");
    setMessage("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <main className="customer-page">
      <header className="page-header">
        <div>
          <p className="eyebrow">CUSTOMER DIRECTORY</p>
          <h2>Customer management</h2>
          <p>Manage customer records from one place.</p>
        </div>

        <div className="customer-count">
          <span>Total Customers</span>
          <strong>{customers.length}</strong>
        </div>
      </header>

      {message && (
        <p className="success-message" role="status">
          {message}
        </p>
      )}

      {error && (
        <p className="error-message" role="alert">
          {error}
        </p>
      )}

      <CustomerForm
        onSubmit={handleSubmit}
        editingCustomer={editingCustomer}
        onCancel={() => setEditingCustomer(null)}
      />

      {loading ? (
        <p>Loading customers...</p>
      ) : (
        <CustomerList
          customers={customers}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </main>
  );
}

export default CustomerPage;