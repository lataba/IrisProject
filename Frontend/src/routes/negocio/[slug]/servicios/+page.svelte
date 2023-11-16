<script>
  import ServiceCard from '../../../../components/ServiceCard.svelte';
  import { v4 as uuidv4 } from 'uuid';
  import Plus from '../../../../asset/Plus.png';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  let listCollborators = [];
  let cards = [];
  let isLoading = true;
  let colaboradoresSeleccionados = writable([]);

  onMount(() => {
    const collborators = localStorage.getItem('collaborators');
    if (collborators) {
      listCollborators = JSON.parse(collborators);
    }
    const storedCards = localStorage.getItem('cards');
    if (storedCards) {
      cards = JSON.parse(storedCards);
    }
    isLoading = false;
  });

  function saveToLocalStorage() {
    localStorage.setItem('cards', JSON.stringify(cards));
  }
  let formCard = {
    name: '',
    duration: '',
    price: '',
    description: '',
    collaborators: [],
  }

  let isModalOpen = false;

  function addCard() {
    isModalOpen = true;
  }

  function editCard(id, newFormData) {
    cards = cards.map((card) => {
      if (card.id === id) {
        card.data = newFormData; // Update the data for the specific card
      }
      return card;
    });
    isModalOpen = false;
  }

  function deleteCard(id) {
    cards = cards.filter((card) => card.id !== id);
    console.log('card deleted');
    saveToLocalStorage();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    formCard = { ...formCard, [name]: value };
  }

  function handleCancel() {
    isModalOpen = false;
  }
  function handleSubmit(event) {
    event.preventDefault();
    isModalOpen = false;
    const id = uuidv4();
    const colaboradoresIds = colaboradoresSeleccionados.update(selected => {
      const checkboxes = Array.from(formData.getAll('colaboradores'));
      return checkboxes.map(checkbox => parseInt(checkbox));
    });
    const newCard = { id, data: { ...formCard } }; // Store data in the new card object
    cards = [...cards, newCard];
    saveToLocalStorage();
    console.log(cards);
    formCard = { // Reset the formCard
      name: '',
      duration: '',
      price: '',
      description: '',
      collaborators: [],
    };
  }
  function handleCollaborators(event) {
    const newCollab = event.target.value;
    console.log("seleccionar colaborador:", newCollab);
    formCard = {
      ...formCard,
      collaborators: [...formCard.collaborators, newCollab],
    };
    console.log(formCard);
  }

</script>

{#if isLoading}
<div class='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50'>
  <div class='p-5 rounded flex flex-col justify-center items-center gap-5'>
    <span class="loading loading-spinner loading-lg"></span>
  </div>
</div>
{/if}
<div class='flex flex-col items-start mt-6 mb-36 text-black'>
  <h1 class='text-4xl font-bold my-10 ml-5 mb-36'>MIS SERVICIOS</h1>
    <div class='mx-5 flex flex-wrap gap-5'>
      {#each cards as card (card.id)}
        <div class="w-300" key={card.id}>
          <ServiceCard 
          id={card.id} 
          onDelete={deleteCard} 
          onEdit={editCard}
          data={card.data}
          />
        </div>
      {/each}
      <div class="gradient-header p-1 rounded-2xl">
        <div class="flex flex-row gap-1 w-96 h-72">
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body flex flex-col pb-5 pt-0 h-72 justify-center">
              <div class=" flex flex-wrap justify-center items-center border-b border-black h-16">
                <h1 class="card-title">AGREGAR SERVICIO</h1>
              </div>
                <div class="flex flex-row justify-center items-center p-4 gap-20">
                  <button on:click={addCard} class="w-40 h-40 rounded-full iris_green">
                    <img src={Plus} alt="Agregar" class="w-40 h-40"/>
                  </button>
                {#if isModalOpen}
                <div class='fixed inset-0 bg-opacity-30 bg-black backdrop-blur-sm flex justify-center items-center z-50'>
                  <div class='bg-white border border-black p-5 rounded flex flex-col justify-center items-center gap-5'>
                <form on:submit={handleSubmit}>
                  <div class="mb-4">
                    <label for="name" class="block text-sm font-medium text-gray-700">
                      Nombre del servicio:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      bind:value={formCard.name}
                      on:input={handleChange}
                      class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                      required
                    />
                  </div>
                  <div class="mb-4">
                    <label for="duration" class="block text-sm font-medium text-gray-700">
                      Duracion:
                    </label>
                    <input
                      type="text"
                      id="duration"
                      name="duration"
                      bind:value={formCard.duration}
                      on:input={handleChange}
                      class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                      required
                    />
                  </div>
                  <div class="mb-4">
                    <label for="price" class="block text-sm font-medium text-gray-700">
                      Precio:
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      bind:value={formCard.price}
                      on:input={handleChange}
                      class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                      required
                    />
                  </div>
                  <div class="mb-4">
                    <label for="description" class="block text-sm font-medium text-gray-700">
                      Descripcion:
                    </label>
                    <input
                      type="description"
                      id="description"
                      name="description"
                      bind:value={formCard.description}
                      on:input={handleChange}
                      class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                      required
                    />
                  </div>
                  <div class="form-control">
                    {#each listCollborators as collaborator}
                      <label class="label cursor-pointer">
                        <input type="checkbox" checked="checked" class="checkbox" value={collaborator} on:click={(event) => handleCollaborators(event)}/>
                        <span class="label-text">{collaborator}</span>
                      </label>
                    {/each}
                  </div>
                  <button
                    type="submit"
                    class="w-full py-2 text-white bg-violeta hover:shadow-md hover:opacity-80 rounded-lg"
                  >
                    Guardar servicio
                  </button>
                  <button class='text-blue-500 underline' on:click={handleCancel}></button>
                </form>
                </div>
                </div>
                {/if}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>