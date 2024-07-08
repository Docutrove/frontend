import createRequest from "../utils/api";

function getTemplateCategories() {
  return createRequest("/api/v1/item/categories?page=1&limit=100&service=template", "get");
}

function getTemplatesByCategory(categoryId: string) {
  return createRequest(`/api/v1/item?limit=100&page=1&categoryId=${categoryId}`, "get");
}

async function createRequestForTemplate(
  url: string,
  method: "get" | "post" | "put" | "patch" | "delete",
  body?: Record<string, any>
) {
  try {
    const headers: any = {
      "Content-Type": "application/json",
    };

    if (localStorage.getItem("AUTH_TOKEN")) {
      headers["Authorization"] = `Bearer ${localStorage.getItem("AUTH_TOKEN")}`;
    }

    const res = await fetch(`https://api.docutrove.co${url}`, {
      method,
      headers,
      body: JSON.stringify(body),
    });
    let response;
    try {
      response = await res.json();
    } catch {
      return [null, { message: "Something went wrong" }];
    }

    if (!res.ok) {
      return [null, response];
    }
    return [response, null];
  } catch (err) {
    return [null, err];
  }
}

function getTemplate(templateId: string) {
  return createRequestForTemplate(`/api/v1/item/${templateId}`, "get");
}

export {
  getTemplateCategories,
  getTemplatesByCategory,
  getTemplate,
};
