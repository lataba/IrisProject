import { writable } from 'svelte/store';

export const store = writable(null);

export const getUserDetails = async ( email, password ) => {
    const response = await fetch('http://10.9.100.70:8000/auth/jwt/create/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    console.log(response);
    if (response.ok) {
        const data = await response.json();
        // cookies.set('refreshToken', data.refresh, {
        //   httpOnly: true,
        //   sameSite: 'strict',
        //   secure: false,
        //   path: '/',
        //   maxAge: 60 * 60 * 24 * 7
        // });
        // cookies.set('accessToken', data.access, {
        //   httpOnly: true,
        //   sameSite: 'strict',
        //   secure: false,
        //   path: '/',
        //   maxAge: 60 * 60 * 24 * 7
        // });
        return data;
    } else {
        return false;
    }
}