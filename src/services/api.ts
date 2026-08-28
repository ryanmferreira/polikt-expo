const DEFAULT_API_URL = "https://polikt-spring.onrender.com";
const LOCALHOST_URL = "http://localhost:8080";

async function getActiveApiUrl() {
    try {
        console.log("Attempting to connect to localhost...");

        const response = await fetch(LOCALHOST_URL, {
            method: "HEAD",
        });

        if (response.ok) {
            console.log("Localhost available. Using localhost.");
            return LOCALHOST_URL;
        }

        console.error(`Status ${response.status} returned`);
    } catch (error) {
        console.warn("Localhost unavailable. Falling back to Render.");
        return DEFAULT_API_URL;
    }
}

export async function apiFetch(path: string, options: RequestInit = {}) {
    const apiUrl = await getActiveApiUrl();

    const response = await fetch(`${apiUrl}${path}`, {
        method: options.method,
        body: options.body,
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
    });

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || `Error ${response.status}`);
    }

    return response.json();
}