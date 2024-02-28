import createRequest from "../utils/api";

function login(payload: { email: string; password: string }) {
  return createRequest("/api/v1/auth/login", "post", payload);
}

function signup(payload: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}) {
  return createRequest("/api/v1/auth/register", "post", payload);
}

export { login, signup };
