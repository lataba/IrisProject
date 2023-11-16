import { c as create_ssr_component, f as each, a as add_attribute, v as validate_component, e as escape } from './ssr-7fae8f6a.js';
import { P as Plus, D as DeleteBin, E as EditPen } from './DeleteBin-5c19eb8e.js';
import './utils-67317de5.js';

const ServiceCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { onDelete } = $$props;
  let { onEdit } = $$props;
  let { data = {
    name: "",
    description: "",
    duration: "",
    price: "",
    collaborators: []
  } } = $$props;
  let listCollborators = localStorage.getItem("collaborators");
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.onDelete === void 0 && $$bindings.onDelete && onDelete !== void 0)
    $$bindings.onDelete(onDelete);
  if ($$props.onEdit === void 0 && $$bindings.onEdit && onEdit !== void 0)
    $$bindings.onEdit(onEdit);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="gradient-header p-1 rounded-2xl"><div class="flex flex-row gap-1 w-96 h-72"><div class="card w-96 bg-base-100 shadow-xl"><div class="card-body flex flex-col py-5 h-72 justify-center"><div class="flex flex-row justify-between items-center border-b border-black h-17 mt-3 pb-1"><h1 class="card-title uppercase">${escape(data.name)}</h1> <div class="flex items-center justify-center py-2"><button class="rounded border-black border-r-1 mx-5" data-svelte-h="svelte-1plzfr3"><img${add_attribute("src", DeleteBin, 0)} alt="DeleteBin" class="h-10"></button> <button class="rounded border-black border-r-1" data-svelte-h="svelte-1iydspd"><img${add_attribute("src", EditPen, 0)} alt="EditPen" class="h-10"></button> ${``}</div></div> <div class="flex flex-row justify-center items-center p-4 gap-20"><h1 class="mr-50 font-semibold text-xl uppercase">${escape(data.duration)}</h1> <h1 class="ml-50 font-semibold text-xl">$${escape(data.price)}</h1></div> <div class="flex flex-row justify-center items-center py-4"><h1 class="font-semibold">${escape(data.description)}</h1></div> <div class="form-control">${each(listCollborators, (collaborator) => {
    return `<label class="label cursor-pointer"><input type="checkbox" checked="checked" class="checkbox"${add_attribute("value", collaborator, 0)}> <span class="label-text">${escape(collaborator)}</span> </label>`;
  })}</div></div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let listCollborators = [];
  let cards = [];
  function saveToLocalStorage() {
    localStorage.setItem("cards", JSON.stringify(cards));
  }
  let formCard = {
    name: "",
    duration: "",
    price: "",
    description: "",
    collaborators: []
  };
  let isModalOpen = false;
  function editCard(id, newFormData) {
    cards = cards.map((card) => {
      if (card.id === id) {
        card.data = newFormData;
      }
      return card;
    });
    isModalOpen = false;
  }
  function deleteCard(id) {
    cards = cards.filter((card) => card.id !== id);
    console.log("card deleted");
    saveToLocalStorage();
  }
  return `${`<div class="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50" data-svelte-h="svelte-an05pc"><div class="p-5 rounded flex flex-col justify-center items-center gap-5"><span class="loading loading-spinner loading-lg"></span></div></div>`} <div class="flex flex-col items-start mt-6 mb-36 text-black"><h1 class="text-4xl font-bold my-10 ml-5 mb-36" data-svelte-h="svelte-1jgc9ys">MIS SERVICIOS</h1> <div class="mx-5 flex flex-wrap gap-5">${each(cards, (card) => {
    return `<div class="w-300"${add_attribute("key", card.id, 0)}>${validate_component(ServiceCard, "ServiceCard").$$render(
      $$result,
      {
        id: card.id,
        onDelete: deleteCard,
        onEdit: editCard,
        data: card.data
      },
      {},
      {}
    )} </div>`;
  })} <div class="gradient-header p-1 rounded-2xl"><div class="flex flex-row gap-1 w-96 h-72"><div class="card w-96 bg-base-100 shadow-xl"><div class="card-body flex flex-col pb-5 pt-0 h-72 justify-center"><div class="flex flex-wrap justify-center items-center border-b border-black h-16" data-svelte-h="svelte-orcjln"><h1 class="card-title">AGREGAR SERVICIO</h1></div> <div class="flex flex-row justify-center items-center p-4 gap-20"><button class="w-40 h-40 rounded-full iris_green" data-svelte-h="svelte-769w3t"><img${add_attribute("src", Plus, 0)} alt="Agregar" class="w-40 h-40"></button> ${isModalOpen ? `<div class="fixed inset-0 bg-opacity-30 bg-black backdrop-blur-sm flex justify-center items-center z-50"><div class="bg-white border border-black p-5 rounded flex flex-col justify-center items-center gap-5"><form><div class="mb-4"><label for="name" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-1asnnyh">Nombre del servicio:</label> <input type="text" id="name" name="name" class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" required${add_attribute("value", formCard.name, 0)}></div> <div class="mb-4"><label for="duration" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-1y2gw5j">Duracion:</label> <input type="text" id="duration" name="duration" class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" required${add_attribute("value", formCard.duration, 0)}></div> <div class="mb-4"><label for="price" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-q1fcb7">Precio:</label> <input type="number" id="price" name="price" class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" required${add_attribute("value", formCard.price, 0)}></div> <div class="mb-4"><label for="description" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-1yovvjn">Descripcion:</label> <input type="description" id="description" name="description" class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" required${add_attribute("value", formCard.description, 0)}></div> <div class="form-control">${each(listCollborators, (collaborator) => {
    return `<label class="label cursor-pointer"><input type="checkbox" checked="checked" class="checkbox"${add_attribute("value", collaborator, 0)}> <span class="label-text">${escape(collaborator)}</span> </label>`;
  })}</div> <button type="submit" class="w-full py-2 text-white bg-violeta hover:shadow-md hover:opacity-80 rounded-lg" data-svelte-h="svelte-kilvlt">Guardar servicio</button> <button class="text-blue-500 underline"></button></form></div></div>` : ``}</div></div></div></div></div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a82cc41d.js.map
