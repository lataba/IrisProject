<script>
  import Navigate from '../../../../asset/Navigate.png';
  import ShareLink from '../../../../asset/ShareLink.png';
  import Copy from '../../../../asset/Copy.png';

  let enlace = 'https://www.irismvp.com/reserva/';

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(enlace);
      console.log('Copiado!');
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  }

</script>
<div class="flex flex-col items-center justify-center">
  <h1 class="text-4xl my-10 ml-5 font-bold text-black">MI ENLACE</h1>
  <div class="gradient-header p-1 justify-center items-center rounded-full">
    <div class="tooltip tooltip-bottom rounded-full w-14 h-14" data-tip="Este es el enlace que deberas compartir con tus clientes para que ellos puedan realizar reservas contigo">
      <button class="btn rounded-full w-14 h-14 font-bold text-4xl">?</button>
    </div>
  </div>

  <div class="flex flex-col items-center justify-center gap-5 my-32">
    <div class="mb-10 bg-gray-100 px-5 py-2 border border-black justify-center items-center flex flex-row gap-5 rounded-2xl">
      <div class="py-5">
        <p class="mx-20 text-2xl">{enlace}</p>
      </div>
      <button on:click={handleCopy} class="p-2">
        <img src={Copy} alt='copiar enlace' class="h-9" />
      </button>
    </div>
    <div class="flex flex-row gap-10 px-8 py-5 items-center text-black">
      <div class="gradient-header  p-1 justify-center items-center rounded-xl border border-black">
        <div class="flex flex-row justify-center items-center w-96 h-20">
          <button class=" btn p-5 w-96 h-20 rounded-xl  justify-center items-center shadow-md flex flex-row gap-10">
            <img src={ShareLink} alt='compartir' class='h-9 -ml-14' />
            <strong class="text-xl">COMPARTIR</strong>
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-row gap-10 px-8 py-5 items-center text-black">
      <div class="gradient-header  p-1 justify-center items-center rounded-xl border border-black">
        <div class="flex flex-row justify-center items-center w-96 h-20">
          <button class="btn p-5 w-96 h-20 rounded-xl  justify-center items-center shadow-md flex flex-row gap-5">
            <img src={Navigate} alt='compartir' class='h-9 ml-3' />
            <strong class="text-xl w-64">VISITAR MI SITIO</strong>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>