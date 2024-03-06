export const fetchRetailSales = async () => {
  const response = await fetch("http://localhost:3000/api/retailSales", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const result = await response.json();
  return result;
};

export const fetchProductData = async () => {
  const response = await fetch("http://localhost:3000/api/productData", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const result = await response.json();
  return result;
};
