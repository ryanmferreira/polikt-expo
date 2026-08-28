import { apiFetch } from "./api";

export async function registerUser(
    name: string,
    email: string,
    password: string,
    phone: string
) {
    return apiFetch('/users', {
        method: 'POST',
        body: JSON.stringify({
            name,
            email,
            password,
            phone,
        }),
    });
}