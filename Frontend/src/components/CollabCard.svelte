<script>
  import CollabCardEdit from "./CollabCardEdit.svelte";
  import DeleteBin from '../asset/DeleteBin.png';
  import EditPen from '../asset/EditPen.png';

  export let id;
  export let onDelete;
  export let onEdit;
  export let data = {
    name: '',
    phone: '',
  };

  let editForm = {
    name: '',
    phone: '',
  }

  let isModalOpen = false;

  function handleDelete() {
    onDelete(id);
  }

  function handleEdit() {
    onEdit(id, editForm);
  }

  const handleClick = () => {
    isModalOpen = !isModalOpen;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    editForm = {
      ...editForm,
      [name]: value,
    };
  };

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Datos enviados:', editForm);
  data = {
    ...data,
    name: editForm.name,
    phone: editForm.phone,
  };
  isModalOpen = false;
};
</script>


<div class="gradient-header p-1 rounded-2xl">
  <div class="flex flex-row gap-1 w-80 h-52">
    <div class="card w-80 bg-base-100 shadow-xl">
      <div class="card-body flex flex-col py-5 h-52 justify-center">
        <div class=" flex flex-row justify-between  items-center border-b border-black h-17 mt-3 pb-1 h-16">
          <h1 class="card-title uppercase">{data.name}</h1>
            <div class='flex items-center justify-center py-2'>
              <button class="rounded border-black border-r-1 mx-5" on:click={handleDelete}>
                <img src={DeleteBin} alt="DeleteBin" class='h-10' />
              </button>
              
              <button class="rounded border-black border-r-1" on:click={handleClick}>
                <img src={EditPen} alt="EditPen" class='h-10' />
              </button>
              
              {#if isModalOpen}
              <div class='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50'>
                <div class='bg-white p-5 rounded flex flex-col justify-center items-center gap-5'>
                  <div class="max-w-md mx-auto py-4">
                    <h2 class="text-2xl font-semibold mb-4">Editar Servicio</h2>
                    <form on:submit={handleSubmit}>
                      <div class="mb-4">
                        <label for="name" class="block text-sm font-medium text-gray-700">
                          Nombre del colaborador:
                          <input
                            type="text"
                            id="name"
                            name="name"
                            bind:value={editForm.name}
                            class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            required
                          />
                        </label>
                      </div>
                      <div class="mb-4">
                        <label for="phone" class="block text-sm font-medium text-gray-700">
                          Telefono:
                          <input
                            type="text"
                            id="phone"
                            name="phone"
                            bind:value={editForm.phone}
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
                      <button on:click={handleEdit} class='underline text-blue-500'>
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/if}
            </div>
        </div>
        <div class="flex flex-row justify-center items-center p-4 gap-20">
          <h1 class="ml-50 font-semibold text-xl">{data.phone}</h1>
        </div>
        <div class="flex flex-row justify-center items-center py-4">
          <h1 class="font-semibold">[LINK]</h1>
        </div>
      </div>
    </div>
  </div>
</div>


<!-- // <div class="flex flex-row gap-1 w-80 h-52">
//   <div class="border-r-15 border border-black border-opacity-80 bg-gray-100 rounded-2xl w-80 h-52">
//     <div class="border-b border-gray-500 border-opacity-80 justify-center p-4 flex flex-row items-center gap-12">
//       <h1 class='font-semibold text-xl'>NOMBRE</h1>
//       <div class=' flex flex-row items-center justify-center h-12 w-80 ml-5'>
//         <button class="rounded border-black border-r-1 mx-5" on:click={handleDelete}>
//           <img src={DeleteBin} alt="DeleteBin" class='h-9' />
//         </button>
//         <CollabCardEdit />
//       </div>
//     </div>
//     <div class="flex flex-col justify-center items-center p-4 gap-5 py-5 h-32 w-80">
//       <p class='font-semibold'>TELEFONO</p>
//       <p class='font-semibold text-xl'>LINK AGENDA</p>
//     </div>
//   </div>
// </div> -->