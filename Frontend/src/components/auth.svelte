<script>
  import { store } from "../hooks/auth";
  
</script>

{#if $store != null }
	<slot />
{:else }
  <h1>
    Debe iniciar sesion!
  </h1>
{/if}

