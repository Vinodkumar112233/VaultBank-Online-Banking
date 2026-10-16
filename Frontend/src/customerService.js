const API_URL = "http://localhost:8081/api/customers";

async function handleResponse(response) {
  const text = await response.text();

  if (!response.ok) {
    throw new Error(text || `HTTP error: ${response.status}`);
  }

  if (!text) return null;

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export async function getCustomers() {
  const response = await fetch(API_URL);
  return handleResponse(response);
}

export async function getCustomerById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  return handleResponse(response);
}

export async function addCustomer(customer) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  });

  return handleResponse(response);
}

export async function updateCustomer(id, customer) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  });

  return handleResponse(response);
}

export async function deleteCustomer(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  return handleResponse(response);
}