import { c as create_ssr_component, e as escape, a as add_attribute } from './ssr-7fae8f6a.js';
import './utils-67317de5.js';

const Navigate = "/_app/immutable/assets/Navigate.13ed117d.png";
const ShareLink = "/_app/immutable/assets/ShareLink.f6df679b.png";
const Copy = "/_app/immutable/assets/Copy.cf4e676c.png";
let enlace = "https://www.irismvp.com/reserva/";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col items-center justify-center"><h1 class="text-4xl my-10 ml-5 font-bold text-black" data-svelte-h="svelte-1b0lw5w">MI ENLACE</h1> <div class="gradient-header p-1 justify-center items-center rounded-full" data-svelte-h="svelte-ewh7zb"><div class="tooltip tooltip-bottom rounded-full w-14 h-14" data-tip="Este es el enlace que deberas compartir con tus clientes para que ellos puedan realizar reservas contigo"><button class="btn rounded-full w-14 h-14 font-bold text-4xl">?</button></div></div> <div class="flex flex-col items-center justify-center gap-5 my-32"><div class="mb-10 bg-gray-100 px-5 py-2 border border-black justify-center items-center flex flex-row gap-5 rounded-2xl"><div class="py-5"><p class="mx-20 text-2xl">${escape(enlace)}</p></div> <button class="p-2" data-svelte-h="svelte-1jg9ric"><img${add_attribute("src", Copy, 0)} alt="copiar enlace" class="h-9"></button></div> <div class="flex flex-row gap-10 px-8 py-5 items-center text-black" data-svelte-h="svelte-10m5n56"><div class="gradient-header p-1 justify-center items-center rounded-xl border border-black"><div class="flex flex-row justify-center items-center w-96 h-20"><button class="btn p-5 w-96 h-20 rounded-xl justify-center items-center shadow-md flex flex-row gap-10"><img${add_attribute("src", ShareLink, 0)} alt="compartir" class="h-9 -ml-14"> <strong class="text-xl">COMPARTIR</strong></button></div></div></div> <div class="flex flex-row gap-10 px-8 py-5 items-center text-black" data-svelte-h="svelte-1x7nzpy"><div class="gradient-header p-1 justify-center items-center rounded-xl border border-black"><div class="flex flex-row justify-center items-center w-96 h-20"><button class="btn p-5 w-96 h-20 rounded-xl justify-center items-center shadow-md flex flex-row gap-5"><img${add_attribute("src", Navigate, 0)} alt="compartir" class="h-9 ml-3"> <strong class="text-xl w-64">VISITAR MI SITIO</strong></button></div></div></div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8f81ea78.js.map
