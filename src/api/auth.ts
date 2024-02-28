import createRequest from "../utils/api";

function login(payload: { email: string; password: string }) {
  return createRequest("/login", "post", payload);
}

export { login };
