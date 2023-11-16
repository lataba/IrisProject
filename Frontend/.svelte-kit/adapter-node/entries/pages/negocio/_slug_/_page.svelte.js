import { c as create_ssr_component, a as add_attribute } from "../../../../chunks/ssr.js";
const colaboradores = "/_app/immutable/assets/growupBusiness.8af62707.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col gap-5 mt-20 mb-36 justify-center items-center text-black" data-svelte-h="svelte-1h9b5gj"><div class="flex justify-between items-center p-20 h-96"><div class="items-center justify-center w-1/2 space"><img${add_attribute("src", colaboradores, 0)} alt="colaboradores" class="w-3/4"></div> <div class="gradient-header p-1 rounded-2xl w-1/2"><div class="flex flex-col justify-center items-center bg-white rounded-2xl gap-2 p-2"><h1 class="text-4xl font-semibold pb-5">Preguntas frecuentes</h1> <div class="collapse collapse-arrow bg-white border border-black"><input type="checkbox"> <div class="collapse-title text-xl font-medium">¿Cómo agregar servicios?</div> <div class="collapse-content"><p>Dirigete a la página &quot;Mis servicios&quot; dentro de la sección &quot;Mi
              negocio&quot; en la barra de navegación y presiona el botón &quot;agregar
              servicio&quot;.</p></div></div> <div class="collapse collapse-arrow bg-white border border-black"><input type="checkbox"> <div class="collapse-title text-xl font-medium">¿Como agregar colaboradores?</div> <div class="collapse-content"><p>Dirigete a la página &quot;Mis colaboradores&quot; dentro de la sección &quot;Mi
              negocio&quot; en la barra de navegación y presiona el botón &quot;agregar
              colaborador&quot;.</p></div></div> <div class="collapse collapse-arrow bg-white border border-black"><input type="checkbox"> <div class="collapse-title text-xl font-medium">¿Cómo se agendan mis clientes?</div> <div class="collapse-content"><p>Dirigete a la pagina &quot;Mi enlace&quot; dentro de la sección &quot;Mi
              negocio&quot;. Ahí encontraras un enlace con el cual tus clientes
              podran acceder a una interfaz donde realizar reservas de manera
              rapida y sencilla.</p></div></div></div></div></div></div>`;
});
export {
  Page as default
};
