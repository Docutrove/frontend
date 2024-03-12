import createRequest from "../utils/api";

function getTemplates() {
  return createRequest("/api/v1/item?limit=100&page=1&categoryId=3", "get");
}

export { getTemplates };
