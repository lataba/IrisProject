import { s as subscribe } from './utils-67317de5.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute } from './ssr-7fae8f6a.js';
import { P as PublicFooter } from './publicFooter-40c61ea5.js';
import { P as PublicHeader } from './publicHeader-aa4f05a7.js';
import { s as store } from './auth-99654305.js';
import './index-c4d8ba05.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_store;
  $$unsubscribe_store = subscribe(store, (value) => value);
  let business = {
    name: "",
    phone: "",
    address: "",
    uniqueWorker: true,
    firstCollaborator: ""
  };
  $$unsubscribe_store();
  return `${validate_component(PublicHeader, "PublicHeader").$$render($$result, {}, {}, {})} <div><div class="max-w-md mx-auto mt-32 mb-20 border-2 rounded-2xl border-violeta p-10"><h2 class="text-2xl font-semibold mb-4" data-svelte-h="svelte-1gfibcg">Formulario de Registro de Empresa</h2> <form><div class="mb-4"><label for="name" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-9t5f95">Nombre de la empresa:</label> <input type="text" id="name" name="name" class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" required${add_attribute("value", business.name, 0)}></div> <div class="mb-4"><label for="phone" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-17wqapm">Teléfono:</label> <input type="text" id="phone" name="phone" class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" required${add_attribute("value", business.phone, 0)}></div> <div class="mb-4"><label for="adress" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-1mntcvu">Dirección:</label> <input type="text" id="address" name="address" class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" required${add_attribute("value", business.address, 0)}></div> <div class="mb-8" data-svelte-h="svelte-xs5ji3"><p class="block text-sm font-medium text-gray-700">¿Quién trabaja en tu empresa?</p> <div class="form-control"><label class="label cursor-pointer"><span class="label-text">Yo</span> <input type="radio" name="radio-10" class="radio checked:bg-violeta" checked></label></div> <div class="form-control"><label class="label cursor-pointer"><span class="label-text">Otros</span> <input type="radio" name="radio-10" class="radio checked:bg-violeta" checked></label></div> <div class="form-control"><label class="label cursor-pointer"><span class="label-text">Yo y otros</span> <input type="radio" name="radio-10" class="radio checked:bg-violeta" checked></label></div></div> <button type="submit" class="w-full py-2 text-white bg-violeta hover:shadow-md hover:opacity-80 rounded-lg" data-svelte-h="svelte-tnfkuk">Continuar</button></form></div></div> ${validate_component(PublicFooter, "PublicFooter").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-cdca4dd8.js.map
