<script>
  let isModalOpen = false;
  let formData = {
    name: '',
    phone: '',
    link: '',
  };

  function handleChange(e) {
    const { name, value } = e.target;
    formData = {
      ...formData,
      [name]: value,
    };
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    isModalOpen = false;
  }

  function openModal() {
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
  }
</script>

<button 
  class="rounded bg-orange-500 border-black border-r-1" 
  on:click={openModal}
>
  EDIT
</button>

{#if isModalOpen}
  <div class="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
    <div class="bg-white p-5 rounded flex flex-col justify-center items-center gap-5">
      <div class="max-w-md mx-auto py-4">
        <h2 class="text-2xl font-semibold mb-4">Editar Colaborador</h2>
        <form on:submit={handleSubmit}>
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              bind:value={formData.name}
              class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div class="mb-4">
            <label for="phone" class="block text-sm font-medium text-gray-700">
              Numero de celular:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              bind:value={formData.phone}
              class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <button
            type="submit"
            class="w-full mt-4 py-2 text-white bg-violeta hover:shadow-md hover:opacity-80 rounded-lg"
          >
            Guardar Cambios
          </button>
        </form>
        <div class="justify-center items-center px-20 py-4">
          <button on:click={closeModal} class="underline text-blue-500">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}