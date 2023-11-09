import { getUserDetails } from "../../hooks/auth";
import { store } from "../../hooks/auth";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async (event) => {
    const data = new FormData(event.currentTarget);
    
    const email = data.get("email");
    const password = data.get("password");

    const user = await getUserDetails(email, password);

    if (user) {
      console.log("Usuario:", user);
      store.set(user);
      store.subscribe((value) => {
        console.log(value);
      });
      if (error) {
        error = "";
      }
    } else {
      error = "Usuario o contraseña incorrectos";
      console.log("Usuario o contraseña incorrectos");
    }

    event.cookies.set('refreshToken', user.refresh, {
      httpOnly: true,
      sameSite: 'strict',
      secure: false,
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    });
    event.cookies.set('accessToken', user.access, {
      httpOnly: true,
      sameSite: 'strict',
      secure: false,
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    });
  }
};