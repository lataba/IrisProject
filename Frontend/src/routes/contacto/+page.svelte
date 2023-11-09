<script>
  import gamilIcon from "../../asset/gmail.svg";
  import whatsIcon from "../../asset/whatsapp.svg";
  import instaIcon from "../../asset/instagram.svg";
  import PublicHeader from "../../components/publicHeader.svelte";
  import PublicFooter from "../../components/publicFooter.svelte";
  let name = "";
  let email = "";
  let message = "";

  function handleSubmit() {
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log("Nombre:", name);
    console.log("Correo Electrónico:", email);
    console.log("Mensaje:", message);
  }
</script>

<PublicHeader />
<div class="py-24">
  <div class="container mx-auto text-center">
    <h2 class="text-4xl font-semibold">Contáctanos</h2>
    <p class="text-gray-600 mt-2">¡Estamos aquí para ayudarte! Ponte en contacto con nosotros a través de las siguientes vías:</p>
    <div class="flex justify-center items-center mt-8">
      <div class="mr-8">
        <div class="flex justify-center items-center">
          <img src={gamilIcon} alt="" class="w-12 h-12 mb-2"/>
        </div>
        <p class="text-gray-600">contact@example.com</p>
      </div>
      <div class="mr-8">
        <div class="flex justify-center items-center">
          <img src={whatsIcon} alt="" class="w-12 h-12 mb-2"/>
        </div>
        <p class="text-gray-600">+1 (123) 456-7890</p>
      </div>
      <div>
        <div class="flex justify-center items-center">
          <img src={instaIcon} alt="" class="w-12 h-12 mb-2"/>
        </div>
        <p class="text-gray-600">@instagram_account</p>
      </div>
    </div>
    <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-8">
      <form on:submit|preventDefault={handleSubmit}>
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-semibold mb-2">Nombre:</label>
          <input
            type="text"
            id="name"
            bind:value={name}
            placeholder="Tu nombre"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-semibold mb-2">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            bind:value={email}
            placeholder="tucorreo@example.com"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-gray-700 font-semibold mb-2">Mensaje:</label>
          <textarea
            id="message"
            bind:value={message}
            placeholder="Escribe tu mensaje aquí"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 h-32"
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  </div>
</div>
<PublicFooter />