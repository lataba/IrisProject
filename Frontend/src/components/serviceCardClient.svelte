<script>
  import { createEventDispatcher } from "svelte";

  export let servicio = "";
  export let precio = "";
  export let profesional = "";
  export let duracion = "";

  let isClicked = false;
  const dispatcher = createEventDispatcher();

  function toggleButton() {
      isClicked = !isClicked;
      dispatcher("clicked", isClicked);
  }
</script>

<div class="service-card">
  <h2>{servicio}</h2>
  <p><strong>Precio:</strong> {precio}</p>
  <p><strong>Profesional a cargo:</strong> {profesional}</p>
  <p><strong>Duracion:</strong> {duracion}</p>

  <div class="button-container">
      {#if isClicked}
          <button class="check" on:click={toggleButton}>-</button>
      {:else}
          <button class="plus" on:click={toggleButton}>+</button>
      {/if}
  </div>
</div>

<style>
  .service-card {
      position: relative;
      border: 1px solid black;
      border-radius: 5px;
      padding: 20px;
      margin: 10px;
      width: 300px;
      background-color: white;
  }

  h2 {
      font-size: large;
      font-family: "Courier New", Courier, monospace;
      font-weight: bold;
      margin-top: 0;
  }

  p {
      margin: 5px 0;
  }

  .button-container {
      position: absolute;
      top: 10px;
      right: 10px;
  }

  .plus {
      background-color: black;
      color: white;
      border: none;
      width: 30px;
      height: 30px;
      border-radius: 90%;
      cursor: pointer;
      font-size: 25px;
      font-weight: bold;
      line-height: 5px;
  }

  .check {
      background-color: green;
      color: white;
      border: none;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 25px;
      font-weight: bold;
      line-height: 5px;
  }
</style>