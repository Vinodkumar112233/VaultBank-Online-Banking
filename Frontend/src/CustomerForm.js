import React, { useEffect, useState } from "react";

function CustomerForm({ onSubmit, editingCustomer, onCancel }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setForm({
      name: editingCustomer?.name || "",
      email: editingCustomer?.email || "",
      phone: editingCustomer?.phone || "",
    });
  }, [editingCustomer]);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      await onSubmit({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
      });

      setForm({
        name: "",
        email: "",
        phone: "",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="customer-form" onSubmit={handleSubmit}>
      <h2>
        {editingCustomer ? "Update Customer" : "Add Customer"}
      </h2>

      <label htmlFor="customer-name">Name</label>
      <input
        id="customer-name"
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter customer name"
        required
      />

      <label htmlFor="customer-email">Email</label>
      <input
        id="customer-email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter email address"
        required
      />

      <label htmlFor="customer-phone">Phone</label>
      <input
        id="customer-phone"
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Enter phone number"
        required
      />

      <div className="form-actions">
        <button type="submit" disabled={loading}>
          {loading
            ? "Saving..."
            : editingCustomer
            ? "Update Customer"
            : "Add Customer"}
        </button>

        {editingCustomer && (
          <button
            type="button"
            className="cancel-btn"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default CustomerForm;