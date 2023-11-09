<script>
  let displayDropdown = false;

  function toggleDropdown() {
    displayDropdown = !displayDropdown;
  }
</script>

<div class='bg-white rounded border border-black relative justify-center w-40 shadow-xl'>
  <div class='px-6 flex flex-auto justify-center'>
    <button on:click={toggleDropdown}><slot></slot></button>
  </div>
  <ul class='absolute bg-white border border-black rounded justify-center w-full'>
    {#if displayDropdown}
      <div class='px-10'>
        <li class='px-5'>Rosa</li>
        <li class='px-5'>Peder</li>
        <li class='px-5'>Aldo</li>
      </div>
    {/if}
  </ul>
</div>