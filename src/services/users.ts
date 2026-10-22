import { User } from "@/models/user";
import { apiFetch } from "./api";
import { isLoggedIn, setToken } from "./token";

export async function registerUser(
  name: string,
  email: string,
  password: string,
  phone: string,
) {
  return apiFetch("/users", {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      password,
      phone,
    }),
  });
}

export async function loginUser(email: string, password: string) {
  const data = await apiFetch<{ token: string }>("/users/auth", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  await setToken(data.token);
}

export async function getMyProfile(): Promise<User> {
  const loggedIn = await isLoggedIn();

  if (!loggedIn) {
    throw new Error("Não está logado.");
  }

  return apiFetch("/users/me");
}

export async function updateMyProfile(data: { name?: string; email?: string; phone?: string; password?: string; }): Promise<User> {
  return apiFetch("/users/me", {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}
