<script>
  import PublicFooter from "../../components/publicFooter.svelte";
  import PublicHeader from "../../components/publicHeader.svelte";
  import { enhance } from "$app/forms";
  import { loginUser, store } from "../../hooks/auth";
  import { goto } from "$app/navigation";
  let email = "";
  let password = "";
  let error = "";
// +page.svelte/login
// ...
async function handleSubmit() {
    try {
        const { data: user, response } = await loginUser(email, password);
        console.log("Respuesta del servidor:", response);
        if (user) {
            store.set(user);
            // Almacena el token en el store del cliente
            store.auth_token = user.auth_token;
            //console.log("Token de autenticación:", store.auth_token);
            //console.log("Datos del usuario:", user);
            if (error) {
                error = "";
            }
        } else {
            error = "Usuario o contraseña incorrectos";
        }
        if (response.ok) {
            console.log("Redireccionando a /datos_negocio");
            goto("/negocio/rosa");
            console.log("Datos del usuario después de redireccionar:", store);
        }
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    }
}
</script>
<PublicHeader />
<div class="max-w-md mx-auto mt-40 p-4 min-h-screen">
  <h2 class="text-2xl font-semibold mb-4">Iniciar sesión</h2>
  <form method="post" action="/login" use:enhance>
    <div class="mb-4">
      <label for="email" class="block text-sm font-medium text-gray-700"
        >Email:</label
      >
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
      <label for="password" class="block text-sm font-medium text-gray-700"
        >Contraseña:</label
      >
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
      type="button"
      on:click={handleSubmit}
      class="w-full mt-4 py-2 text-white bg-violeta hover:shadow-md hover:opacity-80 rounded-lg"
    >
      Iniciar Sesión
    </button>
  </form>
  {#if error}
    <p class="text-red-500 mt-2">{error}</p>
  {/if}
  <p class="pt-6">
    ¿No estás registrado? <a href="/registro" class="underline text-blue-500"
      >Registrarse</a
    >
  </p>
</div>
<PublicFooter />