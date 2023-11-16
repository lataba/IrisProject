import { c as create_ssr_component, v as validate_component, a as add_attribute, f as each, e as escape } from './ssr-7fae8f6a.js';
import 'flatpickr';
import './utils-67317de5.js';

const css$2 = {
  code: 'header.svelte-1f42pka{position:relative;background-image:linear-gradient(\r\n              rgba(255, 255, 255, 0.5),\r\n              rgba(255, 255, 255, 0.5)\r\n          ),\r\n          url("../asset/banner_hugo.png");background-size:cover;background-position:center;color:black;padding:80px;text-align:center}h1.svelte-1f42pka{margin:0;font-size:30px;font-family:"Lucida Sans", "Lucida Sans Regular", "Lucida Grande",\r\n          "Lucida Sans Unicode", Geneva, Verdana, sans-serif}h2.svelte-1f42pka{margin:0;font-size:20px;font-family:"Lucida Sans", "Lucida Sans Regular", "Lucida Grande",\r\n          "Lucida Sans Unicode", Geneva, Verdana, sans-serif}.info-button.svelte-1f42pka,.share-button.svelte-1f42pka{position:absolute;bottom:15px;color:white;border:none;padding:0px 30px 50px 50px;border-radius:100%;cursor:pointer}.info-button.svelte-1f42pka{right:130px;background-image:url("../asset/infoIcon.png");background-size:40px 40px;background-position:center;background-repeat:no-repeat;text-indent:-9999px}.share-button.svelte-1f42pka{right:40px;background-image:url("../asset/shareIcon.png");background-size:40px 40px;background-position:center;background-repeat:no-repeat;text-indent:-9999px}',
  map: null
};
const HeaderClient = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Sitio Reservas" } = $$props;
  let { rubro = "Rubro" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.rubro === void 0 && $$bindings.rubro && rubro !== void 0)
    $$bindings.rubro(rubro);
  $$result.css.add(css$2);
  return `  <header class="svelte-1f42pka"><h1 class="svelte-1f42pka">${escape(title)}</h1> <h2 class="svelte-1f42pka">${escape(rubro)}</h2> <button class="share-button svelte-1f42pka" data-svelte-h="svelte-m4c378">Share</button> <button class="info-button svelte-1f42pka" data-svelte-h="svelte-1v06n8i">Info</button> </header>`;
});
const css$1 = {
  code: "footer.svelte-6q80fc{background-color:black;padding:20px;text-align:center;color:white}",
  map: null
};
const FooterClient = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div data-svelte-h="svelte-1err6km"><footer class="svelte-6q80fc"><p>Iris-mvp.com</p></footer> </div>`;
});
const logoPelu = "/_app/immutable/assets/calendarioCliente.563be923.png";
const css = {
  code: ".profile-picture.svelte-19ehkcm{width:250px;height:250px;border-radius:50%;object-fit:cover;margin-top:-200px;margin-left:50px;position:relative;z-index:1}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedCollaborators = {};
  let exampleServices = [
    {
      id: 1,
      title: "Corte de pelo Hombre",
      description: "Corte de pelo para hombre, incluye barba",
      cost: "$450",
      duration: "1:00 hora",
      collaborators: ["José", "Raúl", "Rosa"]
    },
    {
      id: 2,
      title: "Corte de pelo Mujer",
      description: "Corte de pelo para mujer, largo y corto",
      cost: "$500",
      duration: "1:30 horas",
      collaborators: ["José", "Rosa", "Patricia"]
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-etcot5_START -->${$$result.title = `<title>Reserva</title>`, ""}<!-- HEAD_svelte-etcot5_END -->`, ""} ${validate_component(HeaderClient, "HeaderClient").$$render(
    $$result,
    {
      title: "[NOMBRE COMERCIO]",
      rubro: "[Rubro]"
    },
    {},
    {}
  )} <img class="profile-picture svelte-19ehkcm"${add_attribute("src", logoPelu, 0)} alt="Foto de perfil"> <div class="container px-20 my-20"> <button class="bg-violeta hover:shadow-md hover:opacity-80 rounded-lg text-white font-bold py-2 px-4" onclick="my_modal_3.showModal()" data-svelte-h="svelte-lkhe4i">Confirmar
    <span class="ml-2" id="serviceCount">0</span>
    servicios</button>  <dialog id="my_modal_3" class="modal"><div class="modal-box"><form method="dialog" data-svelte-h="svelte-125rfp"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <h3 class="font-bold text-lg" data-svelte-h="svelte-gal91n">Confirmar reservas</h3> ${each(exampleServices, (service) => {
    return `<p class="py-4">${escape(service.title)} con ${escape(selectedCollaborators[service.title])}</p> <p class="py-4" data-svelte-h="svelte-f5320i"><strong>Fecha:</strong> <input class="date-picker" type="text" placeholder="Seleccione la fecha aquí"></p> <p class="py-4" data-svelte-h="svelte-12oxndh"><strong>Horarios:</strong> </p>`;
  })}</div></dialog>  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10"> ${each(exampleServices, (service) => {
    return `<div class="card w-96 bg-base-100 shadow-xl"><div class="card-body"><h2 class="card-title">${escape(service.title)}</h2> <p>${escape(service.description)}</p> <p>Costo: ${escape(service.cost)} | Duración: ${escape(service.duration)}</p>  <select class="block border border-gray-300 rounded py-2 px-3 mb-2"><option value="Seleccionar colaborador" data-svelte-h="svelte-15zxlaw">Seleccionar colaborador</option>${each(service.collaborators, (collaborator) => {
      return `<option${add_attribute("value", collaborator, 0)}>${escape(collaborator)}</option>`;
    })}</select>  <div class="flex justify-between card-actions"><button class="btn bg-verde hover:shadow-md hover:opacity-80 rounded-lg text-white font-bold py-2 px-4" data-svelte-h="svelte-1aqegn6">Agregar</button> <button class="btn bg-azul hover:shadow-md hover:opacity-80 rounded-lg text-white font-bold py-2 px-4" data-svelte-h="svelte-ydylg6">Eliminar</button> </div></div> </div>`;
  })}      </div></div> ${validate_component(FooterClient, "Footer").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-4a35c170.js.map
