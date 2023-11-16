import { writable } from 'svelte/store';
// Crea el store
export const store = writable(null);
export const loginUser = async (email, password) => {
    try {
        const response = await fetch('http://localhost:8000/auth/token/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        if (response.ok) {
            const data = await response.json();
            // Almacena el token en una cookie
            document.cookie = `auth_token=${data.auth_token}; path=/`;
            return { data, response };
        } else {
            return { data: null, response };
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
        return { data: null, response: null };
    }
}