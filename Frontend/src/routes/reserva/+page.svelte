<script>
  import HeaderClient from "../../components/headerClient.svelte";
  import Footer from "../../components/footerClient.svelte";
  import logoPelu from "../../asset/calendarioCliente.png";
  import flatpickr from "flatpickr";

  let services = [];
  let selectedServices = [];
  let selectedCollaborators = {};
  let selectedDate = [];

  let exampleServices = [
    {
      id: 1,
      title: "Corte de pelo Hombre",
      description: "Corte de pelo para hombre, incluye barba",
      cost: "$450",
      duration: "1:00 hora",
      collaborators: ["José", "Raúl", "Rosa"],
    },
    {
      id: 2,
      title: "Corte de pelo Mujer",
      description: "Corte de pelo para mujer, largo y corto",
      cost: "$500",
      duration: "1:30 horas",
      collaborators: ["José", "Rosa", "Patricia"],
    },
  ];

  // Función para cargar servicios desde la API
  // async function loadServices() {
  //   try {
  //     const response = await fetch('URL');
  //     const data = await response.json();
  //     services = data;
  //   } catch (error) {
  //     console.error('Error fetching services:', error);
  //   }
  // }

  // Función para agregar un servicio a la lista de compra
  function addToCart(service) {
    console.log(selectedCollaborators);
    console.log("Agregando:", service.title, selectedCollaborators[service.id]);
    let serviceId = service.id;
    if (!selectedCollaborators[serviceId]) {
      alert("Debe seleccionar un colaborador");
      return;
    }
    const newService = {
      ...service,
      collaborator: selectedCollaborators[serviceId],
    };
    selectedServices = [...selectedServices, newService];
    updateServiceCount();
    console.log(selectedServices);
  }

  // Función para eliminar un servicio de la lista de compra
  function removeFromCart(service) {
    console.log("Eliminando:", service.title);
    selectedServices = selectedServices.filter((item) => item !== service);
    updateServiceCount();
    console.log(selectedServices);
  }

  // Función para actualizar el contador de servicios en el botón de confirmación
  function updateServiceCount() {
    const count = selectedServices.length;
    const serviceCountElement = document.getElementById("serviceCount");
    if (serviceCountElement) {
      serviceCountElement.innerText = count.toString();
    }
  }

  function updateCollaborator(event, service) {
    let collaboratorElement = event.target.value;
    console.log("seleccionar colaborador:",service.title, collaboratorElement);
    if (collaboratorElement != "Seleccionar colaborador") {
      selectedCollaborators[service.id] = collaboratorElement;
    }
    console.log(selectedCollaborators);
    console.log(selectedCollaborators[service.id]);
  }

  function selectDate() {
    flatpickr(".date-picker", {
      dateFormat: "Y-m-d",
      onChange: (selectedDates) => {
        selectedDate = selectedDates[0] || null;
      },
    });
  }
  // Llamada a la función para cargar servicios al cargar la página
  // loadServices();
</script>
<svelte:head>
  <title>Reserva</title>
</svelte:head>

<HeaderClient title="[NOMBRE COMERCIO]" rubro="[Rubro]" />
<img class="profile-picture" src={logoPelu} alt="Foto de perfil" />

<div class="container px-20 my-20">
  <!-- Barra de confirmación de reserva -->
  <button
    class="bg-violeta hover:shadow-md hover:opacity-80 rounded-lg text-white font-bold py-2 px-4"
    onclick="my_modal_3.showModal()"
  >
    Confirmar
    <span class="ml-2" id="serviceCount"> 0 </span>
    servicios
  </button>

  <!-- Modal -->
  <dialog id="my_modal_3" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >✕</button
        >
      </form>
      <h3 class="font-bold text-lg">Confirmar reservas</h3>
      {#each exampleServices as service}
        <p class="py-4">{service.title} con {selectedCollaborators[service.title]}</p>
        <p class="py-4">
          <strong>Fecha:</strong>
          <input
            class="date-picker"
            type="text"
            placeholder="Seleccione la fecha aquí"
          />
        </p>
        <p class="py-4">
          <strong>Horarios:</strong>
        </p>
      {/each}
    </div>
  </dialog>

  <!-- Tarjetas de servicios -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
    <!-- Tarjetas ejemplos -->
    {#each exampleServices as service}
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{service.title}</h2>
          <p>{service.description}</p>
          <p>
            Costo: {service.cost} | Duración: {service.duration}
          </p>

          <!-- Dropdown de colaboradores -->
          <select
            class="block border border-gray-300 rounded py-2 px-3 mb-2"
            on:change={(event) => updateCollaborator(event, service)}
          >
            <option>Seleccionar colaborador</option>
            {#each service.collaborators as collaborator}
              <option value={collaborator}>{collaborator}</option>
            {/each}
          </select>

          <!-- Botones de agregar y eliminar servicio -->
          <div class="flex justify-between card-actions">
            <button
              class="btn bg-verde hover:shadow-md hover:opacity-80 rounded-lg text-white font-bold py-2 px-4"
              on:click={() => addToCart(service)}
            >
              Agregar
            </button>
            <button
              class="btn bg-azul hover:shadow-md hover:opacity-80 rounded-lg text-white font-bold py-2 px-4"
              on:click={() => removeFromCart(service)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    {/each}

    <!-- Tarjeta desde API -->
    <!-- {#each services as service}
    <div class="bg-white rounded-lg shadow-lg p-4">
      <h2 class="text-lg font-bold mb-2">{service.title}</h2>
      <p class="text-sm text-gray-600 mb-2">{service.description}</p>
      <p class="text-sm text-gray-700 mb-2">Cost: {service.cost} | Duration: {service.duration}</p> -->

    <!-- Dropdown de colaboradores -->
    <!-- <select class="block border border-gray-300 rounded py-2 px-3 mb-2">
        <option>Select collaborator</option>
        {#each service.collaborators as collaborator}
        <option>{collaborator}</option>
        {/each}
      </select> -->

    <!-- Botones de agregar y eliminar servicio -->
    <!-- <div class="flex justify-between">
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" on:click={() => addToCart(service)}>
          Add
        </button>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" on:click={() => removeFromCart(service)}>
          Delete
        </button>
      </div>
    </div>
    {/each} -->
  </div>
</div>

<Footer />

<style>
  .profile-picture {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    margin-top: -200px;
    margin-left: 50px;
    position: relative;
    z-index: 1;
  }
</style>
