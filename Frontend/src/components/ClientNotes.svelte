<script>
  import Dropdown from './Dropdown.svelte';
</script>

<div class="flex flex-row gap-10 px-8 py-5 border-b border-gray-400 items-center">
  <h1 class="text-xl mx-5">Nombre del cliente</h1>
  <h1 class="text-xl mx-5">Numero de celular</h1>
  <h1 class="text-xl mx-5">Correo electronico</h1>
  <Dropdown>Ver notas</Dropdown>
  <button class="bg-white rounded-2xl h-10 w-40 border border-black mx-5 shadow-md font-semibold">Agregar Nota</button>
</div>