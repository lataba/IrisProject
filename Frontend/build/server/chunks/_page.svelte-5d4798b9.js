import { c as create_ssr_component, v as validate_component, a as add_attribute } from './ssr-7fae8f6a.js';
import { P as PublicFooter } from './publicFooter-40c61ea5.js';
import { P as PublicHeader } from './publicHeader-aa4f05a7.js';
import './utils-67317de5.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  return `${validate_component(PublicHeader, "PublicHeader").$$render($$result, {}, {}, {})} <div class="max-w-md mx-auto mt-40 p-4 min-h-screen"><h2 class="text-2xl font-semibold mb-4" data-svelte-h="svelte-pqynkm">Iniciar sesión</h2> <form method="post" action="/login"><div class="mb-4"><label for="email" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-69pry4">Email:</label> <input type="email" id="email" name="email" class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" required${add_attribute("value", email, 0)}></div> <div class="mb-4"><label for="password" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-1rd1u2s">Contraseña:</label> <input type="password" id="password" name="password" class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" required${add_attribute("value", password, 0)}></div> <button type="button" class="w-full mt-4 py-2 text-white bg-violeta hover:shadow-md hover:opacity-80 rounded-lg" data-svelte-h="svelte-1nirnfz">Iniciar Sesión</button></form> ${``} <p class="pt-6" data-svelte-h="svelte-ahgi8i">¿No estás registrado? <a href="/registro" class="underline text-blue-500">Registrarse</a></p></div> ${validate_component(PublicFooter, "PublicFooter").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5d4798b9.js.map
