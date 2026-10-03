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
  try {
    const data = await apiFetch("/users/auth", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    setToken(data.token);
    return true;
  } catch {
    // TODO: Error handling
    alert("Erro ao logar na conta");
    return false;
  }
}

export async function getMyProfile(): Promise<User> {
  const loggedIn = await isLoggedIn();

  if (!loggedIn) {
    throw new Error("Não está logado.");
  }

  return apiFetch("/users/me");
}
