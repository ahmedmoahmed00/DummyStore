import { API_CONFIG } from "../../config/api";

export default async function getProducts(skip, limit) {
  try {
    const res = await fetch(
      `${API_CONFIG.BASE_URL}/products?limit=${limit}&skip=${skip}`
    );

    if (!res.ok) {
      throw new Error(`HTTP Error! Status: ${res.status}`);
    }

    const data = await res.json();

    return data.products;
  } catch (error) {
    console.error("Failed to fetch products:", error.message);
    throw error;
  }
}
