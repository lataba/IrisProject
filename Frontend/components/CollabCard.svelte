<script>
  let isOpen = false;

  function toggleDropdown() {
    isOpen = !isOpen;
  }
</script>

<div class="relative">
  <button
    class="border border-black p-2 rounded-2xl focus:outline-none font-semibold px-5"
    on:click={toggleDropdown}
  >
    <slot></slot>
  </button>

  {#if isOpen}
    <div class="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg">
      <ul>
        <li class="p-2 hover:bg-blue-100">Rosa</li>
        <li class="p-2 hover:bg-blue-100">Peder</li>
        <li class="p-2 hover:bg-blue-100">Aldo</li>
      </ul>
    </div>
  {/if}
</div>