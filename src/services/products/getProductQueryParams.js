import { API_CONFIG } from "../../config/api";

export default async function getProductQueryParams(query, category) {
  try {
    const res = await fetch(`${API_CONFIG.BASE_URL}/products?limit=0`);

    if (!res.ok) {
      throw new Error(`HTTP Error! Status: ${res.status}`);
    }

    const data = await res.json();

    let items = data.products;

    if (query !== "all") {
      items = items.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (category !== "all") {
      items = items.filter((item) => item.category === category);
    }

    return items;
  } catch (error) {
    console.error("Failed to fetch products:", error.message);
    throw error;
  }
}
