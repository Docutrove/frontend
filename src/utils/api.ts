
export default async function createRequest(
  url: string,
  method: "get" | "post" | "put" | "patch" | "delete",
  body?: Record<string, any>
) {
  const res = await fetch(`https://baseapi${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
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
}