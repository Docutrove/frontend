import createRequest from "../utils/api";

function getTemplateCategories() {
  return createRequest("/api/v1/item/categories?page=1&limit=100&service=template", "get");
}

function getTemplatesByCategory(categoryId: string) {
  return createRequest(`/api/v1/item?limit=100&page=1&categoryId=${categoryId}`, "get");
}

function getTemplate(templateId: string) {
  return createRequest(`/api/v1/item/${templateId}`, "get");
}

export {
  getTemplateCategories,
  getTemplatesByCategory,
  getTemplate,
};
