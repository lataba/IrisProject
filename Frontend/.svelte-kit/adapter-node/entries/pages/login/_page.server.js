import { l as loginUser, s as store } from "../../../chunks/auth.js";
const actions = {
  default: async (event) => {
    const data = new FormData(event.body);
    const email = data.get("email");
    const password = data.get("password");
    const { data: user, response } = await loginUser(email, password);
    if (user) {
      store.set(user);
      console.log("Server store:", store);
    }
    if (response.ok) {
      return {
        status: 302,
        // Código de redirección
        headers: {
          location: "/negocios"
          // Página a la que redirigir
        }
      };
    }
    event.cookies.set("auth_token", "", {
      httpOnly: true,
      sameSite: "strict",
      secure: false,
      path: "/",
      maxAge: 0
    });
    console.log("Cookies:", event.cookies);
    return {
      body: JSON.stringify({ error: "Usuario o contraseña incorrectos" }),
      status: 401,
      // Código de no autorizado
      headers: {
        "Content-Type": "application/json"
      }
    };
  }
};
export {
  actions
};
