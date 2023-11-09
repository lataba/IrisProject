<script>
  import "../../../app.css";
  import { onMount } from "svelte";
  import logoIris from "../../../asset/otra_flor.svg";

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

<div class="">
  <div class="header">
    <nav class="gradient-header p-4 pr-10 pl-10 flex items-center justify-between">
      <div class="flex items-center">
        <img src={logoIris} alt="Logo" class="w-10" />
        <span class="text-white ml-2 text-lg font-semibold">IRIS</span>
      </div>
      <div class="flex items-center text-lg gap-10">
        <a href="/negocio/[slug]/" class="text-white">Inicio</a>
        <a href="/negocio/[slug]/clientes" class="text-white">Clientes</a>
        <a href="/negocio/[slug]/colaboradores" class="text-white">Colaboradores</a>
        <a href="/negocio/[slug]/agenda" class="text-white">Agenda</a>
        <a href="/negocio/[slug]/servicios" class="text-white">Servicios</a>
        <a href="/negocio/[slug]/enlace" class="text-white">Enlace</a>
      </div>
    </nav>
  </div>
  <slot />
</div>

