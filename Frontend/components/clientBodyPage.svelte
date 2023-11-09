<script>
  import TarjetaServicios from "./serviceCardClient.svelte";

  let servicios = [
    {
      servicio: "Corte de pelo",
      precio: "$400",
      profesional: "Juan",
      duracion: "30 min",
    },
    {
      servicio: "Manicura",
      precio: "$250",
      profesional: "María",
      duracion: "40 min",
    },
    {
      servicio: "Pedicura",
      precio: "$250",
      profesional: "Alicia",
      duracion: "40 min",
    },
    {
      servicio: "Brushing",
      precio: "$350",
      profesional: "Rosa",
      duracion: "20 min",
    },
    {
      servicio: "Lavado de pelo",
      precio: "$200",
      profesional: "Roberto",
      duracion: "20 min",
    },
    {
      servicio: "Otro",
      precio: "$otro",
      profesional: "otro",
      duracion: "otro",
    },
  ];
  let count = 0;

  function actualizarContador(isClicked) {
    count += isClicked ? 1 : -1;
  }

  /*
      function actualizarContador(isClicked) {
        if (isClicked) {
          count += 1;
        } else {
        count -= 1;
      }
    }
    */
</script>

<main class="relative p-20 flex justify-end items-center -mt-20 -mb-50">
  {#if count === 1}
    <button class="px-30 py-15 bg-gray-500 text-white border-none  rounded-md cursor-pointer text-base">Reservar {count} servicio</button>
  {:else}
    <button>Reservar {count} servicios</button>
  {/if}
</main>

<div class="service-grid flex flex-wrap justify-evenly p-20 mt-50 -mb-20">
  {#each servicios as servicio}
    <TarjetaServicios
      servicio={servicio.servicio}
      precio={servicio.precio}
      profesional={servicio.profesional}
      duracion={servicio.duracion}
      on:clicked={(isClicked) => actualizarContador(isClicked)}
    />
  {/each}
</div>

<style>
  button {
    box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.1s ease;
  }

  button:hover {
    box-shadow: darkgray 0px 5px 8px 0px;
  }
</style>