<script>
  import "../app.css";
  import { onMount } from "svelte";

  let isModalOpen = false;

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      isModalOpen = true;
    }
  }

  onMount(() => {
    // Define la lógica necesaria para abrir o cerrar el modal
  });
</script>

<div class="content flex-grow"><slot /></div>


