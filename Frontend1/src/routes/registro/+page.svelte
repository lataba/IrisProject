<script>
  import PublicFooter from "../../components/publicFooter.svelte";
  import PublicHeader from "../../components/publicHeader.svelte";

  let name = "",
    email = "",
    password = "",
    re_password = "";

  async function handleSubmit() {
    console.log('Enviando solicitud:', { name, email, password, re_password });
    const response = await fetch("http://127.0.0.1:8000/auth/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, re_password }),
    });
    console.log('Respuesta del servidor:', response);

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      return true;
    } else {
      return false;
    }
  }
</script>

<PublicHeader />

<div class="max-w-md mx-auto mt-40 p-4 min-h-screen">
  <h2 class="text-2xl font-semibold mb-4">Formulario de Registro</h2>
  <form on:submit={handleSubmit}>
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-700">
        Nombre:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        bind:value={name}
        class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        required
      />
    </div>
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
    <div class="mb-4">
      <label for="re_password" class="block text-sm font-medium text-gray-700">
        Repetir Contraseña:
      </label>
      <input
        type="password"
        id="re_password"
        name="re_password"
        bind:value={re_password}
        class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        required
      />
    </div>
    <button
      type="submit"
      class="w-full py-2 text-white bg-violeta hover:shadow-md hover:opacity-80 rounded-lg"
    >
      Registrarse
    </button>
  </form>
  <p class="pt-6">
    ¿Ya estás registrado? <a href="/login" class="underline text-blue-500"
      >Iniciar sesión</a
    >
  </p>
</div>
<PublicFooter />
