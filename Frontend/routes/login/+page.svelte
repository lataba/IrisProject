<script>
  import PublicFooter from "../../components/publicFooter.svelte";
  import PublicHeader from "../../components/publicHeader.svelte";
  import { enhance } from "$app/forms"

  let email = "",
    password = "",
    error = "";
</script>

<PublicHeader />
<div class="max-w-md mx-auto mt-40 p-4 min-h-screen">
  <h2 class="text-2xl font-semibold mb-4">Iniciar sesión</h2>
  <form method="post" actions="/login" use:enhance>
    <div class="mb-4">
      <label for="email" class="block text-sm font-medium text-gray-700">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        bind:value={email}
        class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        required
      />
    </div>
    <div class="mb-4">
      <label for="password" class="block text-sm font-medium text-gray-700">
        Contraseña:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        bind:value={password}
        class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        required
      />
    </div>
    <button
      type="submit"
      class="w-full mt-4 py-2 text-white bg-violeta hover:shadow-md hover:opacity-80 rounded-lg"
    >
      Iniciar Sesión
    </button>
  </form>
  <p class="pt-6">
    ¿No estás registrado? <a href="/registro" class="underline text-blue-500"
      >Registrarse</a
    >
  </p>
</div>
<PublicFooter />
