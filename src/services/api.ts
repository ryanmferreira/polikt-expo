import { getToken } from "./token";

const API_URL = process.env.EXPO_PUBLIC_API_URL || "http://localhost:8080";

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

function defaultMessage(status: number): string {
  switch (status) {
    case 400:
      return "Requisição inválida.";
    case 401:
      return "E-mail ou senha inválidos, ou sessão expirada.";
    case 403:
      return "Acesso negado.";
    case 404:
      return "Recurso não encontrado.";
    case 409:
      return "Este dado já está em uso.";
    default:
      return `Erro inesperado (${status}).`;
  }
}

async function errorMessageFrom(response: Response): Promise<string> {
  const text = await response.text();

  if (!text) {
    return defaultMessage(response.status);
  }

  try {
    const body = JSON.parse(text);
    return body.message || body.error || defaultMessage(response.status);
  } catch {
    return text;
  }
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return "Ocorreu um erro inesperado.";
}

export async function apiFetch<T = any>(path: string, options: RequestInit = {},): Promise<T> {
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
    throw new ApiError(await errorMessageFrom(response), response.status);
  }

  if (response.status === 204) {
    return null as T;
  }

  return response.json();
}
