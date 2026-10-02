import { User } from "@/models/user";
import { apiFetch } from "./api";
import { isLoggedIn, setToken } from "./token";

export async function registerUser(name: string, email: string, password: string, phone: string) {
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

export async function loginUser(email: string, password: string) {
    const data = await apiFetch('/users/auth', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
        }),
    });

    setToken(data.token);
}

export async function getMyProfile(): Promise<User> {
    const loggedIn = await isLoggedIn();

    if (!loggedIn) {
        throw new Error("Não está logado.");
    }

    return apiFetch("/users/me");
}