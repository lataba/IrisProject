<script>
  let isModalOpen = false;

  const handleClick = () => {
      isModalOpen = !isModalOpen;
  }

  let formData = {
      name: '',
      description: '',
      duration: '',
      price: '',
  }

  const handleChange = (e) => {
      const { name, value } = e.target;
      formData = {
          ...formData,
          [name]: value,
      };
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Datos enviados:', formData);
      isModalOpen = false;
  };


</script>

<button 
class="rounded bg-orange-500 border-black border-r-1" 
on:click={handleClick}
>
  EDIT
</button>
{#if isModalOpen}
<div class='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50'>
<div class='bg-white p-5 rounded flex flex-col justify-center items-center gap-5'>
<div class="max-w-md mx-auto py-4">
  <h2 class="text-2xl font-semibold mb-4">Editar Servicio</h2>
  <form on:submit={handleSubmit}>
    
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-700">
        Nombre del servicio:
      <input
        type="name"
        id="name"
        name="name"
        value={formData.name}
        on:change={handleChange}
        class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        required
      />
    </label>
    </div>

    <div class="mb-4">
      <label for="duration" class="block text-sm font-medium text-gray-700">
        Duración:
      
      <input
        type="duration"
        id="duration"
        name="duration"
        value={formData.duration}
        on:change={handleChange}
        class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        required
      />
    </label>
    </div>

    <div class="mb-4">
      <label for="price" class="block text-sm font-medium text-gray-700">
        Precio:
      <input
        type="price"
        id="price"
        name="price"
        value={formData.price}
        on:change={handleChange}
        class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        required
      />
    </label>
    </div>

    <div class="mb-4">
      <label for="description" class="block text-sm font-medium text-gray-700">
        Descripción:
      <input
        type="description"
        id="description"
        name="description"
        value={formData.description}
        on:change={handleChange}
        class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        required
      />
    </label>
    </div>
    <button
      type="submit"
      class="w-full mt-4 py-2 text-white bg-violeta hover:shadow-md hover:opacity-80 rounded-lg"
    >
      Guardar Cambios
    </button>
  </form>
  <div class='justify-center items-center px-20 py-4'>
    <button on:click={handleClick} class='underline text-blue-500'>
      Cancelar
    </button>
  </div>
</div>
</div>
</div>
{/if}