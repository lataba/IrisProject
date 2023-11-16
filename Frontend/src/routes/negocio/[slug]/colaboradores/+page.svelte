<script>
  import ColaboratorCard from '../../../../components/CollabCard.svelte';
  import { v4 as uuidv4 } from 'uuid';
  import Plus from '../../../../asset/Plus.png';
  import { onMount } from 'svelte';

  let cards = [];
  let isLoading = true;

  onMount(() => {
    isLoading = true;
    const storedCards = localStorage.getItem('collabCards');
    if (storedCards) {
      cards = JSON.parse(storedCards);
      isLoading = false;
    }
  });

  function saveToLocalStorage() {
    isLoading = true;
    localStorage.setItem('collabCards', JSON.stringify(cards));
    isLoading = false;
  }

let formCard = {
  name: '',
  phone: ''
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

function handleSubmit(event) {
  event.preventDefault();
  isModalOpen = false;
  const id = uuidv4();
  const newCard = { id, isClient: false, data: { ...formCard } }; // Store data in the new card object
  cards = [...cards, newCard];
  saveToLocalStorage();
  formCard = { // Reset the formCard
    name: '',
    phone: ''
  };
}

</script>

{#if isLoading}
<div class='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50'>
  <div class='p-5 rounded flex flex-col justify-center items-center gap-5'>
    <span class="loading loading-spinner loading-lg"></span>
  </div>
</div>
{/if}
<div class='flex flex-col items-start text-black mt-7'>
  <h1 class='text-4xl font-bold my-10 ml-5 mb-36'>MIS COLABORADORES</h1>

    <div class='mx-5 flex flex-wrap gap-5'>
      {#each cards as card (card.id)}
        <div class="w-300" key={card.id}>
          <ColaboratorCard 
          id={card.id} 
          onDelete={deleteCard} 
          onEdit={editCard} 
          data={card.data}/>
        </div>
      {/each}

      <div class="gradient-header p-1 rounded-2xl">
        <div class="flex flex-row gap-1 w-80 h-52">
          <div class="card w-80 bg-base-100 shadow-xl">
            <div class="card-body flex flex-col pb-5 pt-0 h-52 justify-center">
              <div class=" flex flex-wrap justify-center items-center border-b border-black h-16 pb-2 pt-1 mt-1.5">
                <h1 class="card-title">AGREGAR COLABOADOR</h1>
              </div>
                <div class="flex flex-row justify-center items-center p-1 pt-4 inset-0 gap-16">
                  <button on:click={addCard} class=" w-20 h-20 rounded-full iris_green">
                    <img src={Plus} alt="Agregar" class="w-20 h-20"/>
                  </button>
                  {#if isModalOpen}
                <div class='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50'>
                  <div class='bg-white border border-black p-5 rounded flex flex-col justify-center items-center gap-5'>
                <form on:submit={handleSubmit}>
                  <div class="mb-4">
                    <label for="name" class="block text-sm font-medium text-gray-700">
                      Nombre del colaborador:
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
                    <label for="phone" class="block text-sm font-medium text-gray-700">
                      Telefono:
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      bind:value={formCard.phone}
                      on:input={handleChange}
                      class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    class="w-full py-2 text-white bg-violeta hover:shadow-md hover:opacity-80 rounded-lg"
                  >
                    Guardar servicio
                  </button>
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