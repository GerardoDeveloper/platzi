import fetch from "node-fetch";

// Uso de top level away, esto permite usar "await" sin el keyword "async"
const response = await fetch("https://api.escuelajs.co/api/v1/products");
const products = await response.json();

export { products };
