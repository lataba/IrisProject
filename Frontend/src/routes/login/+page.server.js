import { loginUser } from "../../hooks/auth";
import { store as serverStore } from "../../hooks/auth";
export const actions = {
  default: async (event) => {
    // Obtener datos del formulario
    const data = new FormData(event.body);
    const email = data.get("email");
    const password = data.get("password");
    // Obtener detalles del usuario
    const { data: user, response } = await loginUser(email, password);
    // Inicializar variable de error
    let error = "";
    // Manejar la respuesta del servidor
    if (user) {
      serverStore.set(user);
      console.log("Server store:", serverStore);
      // Limpiar error si existe
      if (error) {
        error = "";
      }
    } else {
      error = "Usuario o contraseña incorrectos";
    }
    // Manejar otras operaciones relacionadas con el éxito, si es necesario
    if (response.ok) {
      // Puedes realizar acciones adicionales para el éxito aquí
      // Por ejemplo, redirigir a otra página
      return {
        status: 302, // Código de redirección
        headers: {
          location: "/negocios", // Página a la que redirigir
        },
      };
    }
    // Borrar la cookie del token de autenticación si la autenticación falla
    event.cookies.set("auth_token", "", {
      httpOnly: true,
      sameSite: "strict",
      secure: false,
      path: "/",
      maxAge: 0,
    });
    console.log("Cookies:", event.cookies);
    // Retornar la respuesta del servidor (por ejemplo, mostrar el error en la página)
    return {
      body: JSON.stringify({ error: "Usuario o contraseña incorrectos" }),
      status: 401, // Código de no autorizado
      headers: {
        "Content-Type": "application/json",
      },
    };
  },
};