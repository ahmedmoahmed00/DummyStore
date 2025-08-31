import { API_CONFIG } from "../../config/api";

export default async function getProductDetails(id) {
  try {
    const res = await fetch(`${API_CONFIG.BASE_URL}/products/${id}`);
    if (!res.ok ) {
      throw new Error(`HTTP Error! Status: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error.message);
    throw error;
  }
}
