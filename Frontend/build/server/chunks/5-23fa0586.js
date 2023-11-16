import { l as loginUser, s as store } from './auth-99654305.js';
import './index-c4d8ba05.js';
import './utils-67317de5.js';

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

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-5d4798b9.js')).default;
const server_id = "src/routes/login/+page.server.js";
const imports = ["_app/immutable/nodes/5.a8ffd3b3.js","_app/immutable/chunks/scheduler.5fff65fb.js","_app/immutable/chunks/index.f20c95b4.js","_app/immutable/chunks/publicFooter.de71edf5.js","_app/immutable/chunks/publicHeader.ba5fbcc9.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.fd275494.js","_app/immutable/chunks/index.bf2be75b.js","_app/immutable/chunks/navigation.dbd2a6cd.js","_app/immutable/chunks/auth.fc3ca823.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-23fa0586.js.map
