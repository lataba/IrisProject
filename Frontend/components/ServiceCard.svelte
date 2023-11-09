<script>
  import Dropdown from "./Dropdown.svelte";
  import ServiceCardEdit from "./ServiceCardEdit.svelte";
  import ServiceQueue from "./ServiceQueue.svelte";

  export let id;
  export let onDelete;
  export let isClient;

  function handleDelete() {
    onDelete(id);
  }
</script>

<div class="flex flex-row gap-1 w-96 h-64">
  <div class="border-r-15 border border-black border-opacity-80 bg-gray-100 rounded-2xl">
    <div class="border-b border-gray-500 border-opacity-80 justify-center p-4 flex flex-row items-center gap-5">
      <h1 class="font-semibold">CORTE DE PELO</h1>
      {#if !isClient}
        <div>
          <button class="rounded bg-red-500 border-black border-r-1 mx-5" on:click={handleDelete}>
            DEL
          </button>
          <ServiceCardEdit />
        </div>
      {/if}

      {#if isClient}
        <ServiceQueue />
      {/if}
    </div>
    <div class="flex flex-row justify-center items-center p-4 gap-20">
      <h1 class="mr-50 font-semibold">45 MIN</h1>
      <h1 class="ml-50 font-semibold">$450</h1>
    </div>
    <div class="flex flex-row justify-center items-center gap-5 p-4 w-80">
      <p class="font-semibold">CORTE DE PELO UNISEX</p>
    </div>
    <div class="flex flex-row justify-center items-center gap-5 p-4">
      <Dropdown>Colaboradores</Dropdown>
    </div>
  </div>
</div>