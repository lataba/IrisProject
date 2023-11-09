<script>
  import ColaboratorCard from '../../../../components/CollabCard.svelte';
  import { v4 as uuidv4 } from 'uuid';

  let cards = [];

  function addCard() {
    const id = uuidv4();
    console.log(id);
    cards = [...cards, { id }];
    console.log('carta agregada');
  }

  function deleteCard(id) {
    cards = cards.filter((card) => card.id !== id);
    console.log('carta eliminada');
  }
</script>


<div class='flex flex-col items-start'>
  <h1 class='text-xl my-10 ml-5'>MIS COLABORADORES</h1>
  <div class='flex flex-row gap-5 h-170'>
    <div class='mx-5 flex flex-row gap-5 h-170'>
      {#each cards as card (card.id)}
        <div class="w-300" key={card.id}>
          <ColaboratorCard id={card.id} onDelete={deleteCard} />
        </div>
      {/each}
    </div>

    <div class="flex flex-row gap-1 w-58 h-52">
      <div class="border-r-15 border border-black border-opacity-80 bg-gray-100 rounded-2xl">
        <div class="border-b border-gray-500 border-opacity-80 justify-center p-4 flex flex-row items-center">
          <h1 class='uppercase'>Agregar Colaborador</h1>
        </div>
        <div class="flex flex-row justify-center items-center p-2">
          <button on:click={addCard} class='bg-green-400 rounded my-14 mx-14 h-10 w-40 text-white'>Agregar</button>
        </div>
      </div>
    </div>
  </div>
</div>
