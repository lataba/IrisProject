import { c as create_ssr_component, v as validate_component } from './ssr-7fae8f6a.js';
import './utils-67317de5.js';

const ClientNotes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-3/4 h-3/4 text-black" data-svelte-h="svelte-cu4g15"><table class="table"> <thead class="text-2xl text-black"><tr><th></th> <th>Nombre</th> <th>Celular</th> <th>Email</th></tr></thead> <tbody class="text-lg hover"> <tr></tr></tbody></table></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col items-center justify-center"><h1 class="text-xl my-10 ml-5" data-svelte-h="svelte-np0zc4">MIS CLIENTES</h1> ${validate_component(ClientNotes, "ClientNotes").$$render($$result, {}, {}, {})}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f9affd7e.js.map
