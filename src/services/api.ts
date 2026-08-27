const API_URL = "http://localhost:8080";

export async function apiFetch(path: string, options: RequestInit = {}) {
    const response = await fetch(`${API_URL}${path}`, {
        method: options.method,
        body: options.body,
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || `Error ${response.status}`);
    }

    return response.json();
}