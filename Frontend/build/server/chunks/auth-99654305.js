import { w as writable } from './index-c4d8ba05.js';

const store = writable(null);
const loginUser = async (email, password) => {
  try {
    const response = await fetch("http://localhost:8000/auth/token/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
    if (response.ok) {
      const data = await response.json();
      document.cookie = `auth_token=${data.auth_token}; path=/`;
      return { data, response };
    } else {
      return { data: null, response };
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
    return { data: null, response: null };
  }
};

export { loginUser as l, store as s };
//# sourceMappingURL=auth-99654305.js.map
