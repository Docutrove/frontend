import createRequest from "../utils/api";

function getCategories() {
  return createRequest("/api/v1/item/categories?page=1&limit=100", "get");
}

export { getCategories };
