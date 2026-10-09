import { getToken } from "./token";

// Base URL of the API. Override with the EXPO_PUBLIC_API_URL environment
// variable (see .env.example); falls back to the deployed API.
const API_URL = process.env.EXPO_PUBLIC_API_URL || "http://localhost:8080";

export async function apiFetch(path: string, options: RequestInit = {}) {
  const token = await getToken();

  const response = await fetch(`${API_URL}${path}`, {
    method: options.method,
    body: options.body,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}
