import { API_CONFIG } from "../../config/api";

export default async function getCategories() {
  try {
    const res = await fetch(`${API_CONFIG.BASE_URL}/products/categories`);

    if (!res.ok) {
      return new Error(`Feild Fetchind Status ${res.status} `);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error.massege);
  }
}
