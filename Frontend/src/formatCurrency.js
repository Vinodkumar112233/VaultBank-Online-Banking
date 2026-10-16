const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatINR(amount) {
  return inrFormatter.format(amount);
}

export function formatSignedINR(amount) {
  const sign = amount < 0 ? "−" : "+";
  return `${sign}${formatINR(Math.abs(amount))}`;
}
