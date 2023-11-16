import { c as create_ssr_component, v as validate_component, a as add_attribute } from './ssr-7fae8f6a.js';
import { P as PublicFooter, l as logoIris, a as loginIcon } from './publicFooter-40c61ea5.js';
import './utils-67317de5.js';

const PrivateHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="navbar fixed z-50 border-b-2" data-svelte-h="svelte-vod3o5"><div class="navbar-start"><div class="dropdown">  <label tabindex="0" class="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></label>  <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56"><li><a href="/negocio/[slug]/">Inicio</a></li> <li>Mi negocio
          <ul class="p-2"><li><a href="/negocio/[slug]/miNegocio">Perfil de negocio</a></li> <li><a href="/negocio/[slug]/servicios">Mis servicios</a></li> <li><a href="/negocio/[slug]/colaboradores">Mis colaboradores</a></li> <li><a href="/negocio/[slug]/clientes">Mis clientes</a></li> <li><a href="/negocio/[slug]/enlace">Mi enlace</a></li></ul></li> <li><a href="/negocio/[slug]/agenda">Mi agenda</a></li></ul></div> <a href="/" class="btn btn-ghost normal-case text-xl"><img${add_attribute("src", logoIris, 0)} alt="" class="w-10">
      IRIS</a></div> <div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1 gap-15 text-lg font-semibold"><li><a href="/negocio/[slug]">INICIO</a></li>  <li tabindex="0"><details><summary>MI NEGOCIO</summary> <ul class="p-2 w-52"><li><a href="/negocio/[slug]/miNegocio">Perfil de negocio</a></li> <li><a href="/negocio/[slug]/servicios">Mis servicios</a></li> <li><a href="/negocio/[slug]/colaboradores">Mis colaboradores</a></li> <li><a href="/negocio/[slug]/clientes">Mis clientes</a></li> <li><a href="/negocio/[slug]/enlace">Mi enlace</a></li></ul></details></li> <li><a href="/negocio/[slug]/agenda">MI AGENDA</a></li></ul></div> <div class="navbar-end"><a href="/login"><img${add_attribute("src", loginIcon, 0)} alt="" class="w-8"></a></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(PrivateHeader, "Header").$$render($$result, {}, {}, {})} <div class="py-10 ">${slots.default ? slots.default({}) : ``}</div> ${validate_component(PublicFooter, "Footer").$$render($$result, {}, {}, {})}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-00b356c8.js.map
