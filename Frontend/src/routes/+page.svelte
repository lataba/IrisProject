<!-- Home page -->
<script>
  import calendarImg from "../asset/calendarImg.png";
  import businessImg from "../asset/business.png";
  import collab2 from "../asset/manCollab.png";
  import collab3 from "../asset/womenCollab.png";
  import PublicFooter from "../components/publicFooter.svelte";
  import PublicHeader from "../components/publicHeader.svelte";
</script>

<PublicHeader />

<!-- welcome section -->
<div class="mt-40 mb-36">
  <div class="hero">
    <div
      class="hero-content flex-col justify-between lg:flex-row w-full h-full"
    >
      <div class="w-1/2">
        <h1 class="text-5xl font-bold">Bienvenido a Iris!</h1>
        <p class="py-6">
          La solución integral que tu pequeña o mediana empresa necesita para
          simplificar la gestión de reservas. Ya sea que dirijas una peluquería,
          un salón de belleza, una casa de tatuajes, consultorio médico, o
          cualquier otro tipo de negocio que requiera de citas o reservas,
          estamos aquí para ayudarte a automatizar y mejorar tu proceso.
        </p>
        <div>
        <a href="/registro">
          <button
            class="w-40 mt-4 py-2 mr-4 text-white bg-violeta hover:shadow-md hover:opacity-80 rounded-lg"
            >Registrarse</button
          ></a>
          <a href="/login">
            <button
              class="w-40 mt-4 py-2 ml-4 text-white bg-violeta hover:shadow-md hover:opacity-80 rounded-lg"
              >Iniciar sesión</button
            ></a>
        </div>
      </div>
      <img src={calendarImg} alt="" class="w-1/2" />
    </div>
  </div>
</div>

<!-- what we offer section -->
<div class="mt-48 mb-28 flex flex-col gap-4 items-center justify-center">
  <h1 class="text-5xl font-bold">¿Qué ofrecemos?</h1>
  <div class="grid grid-cols-4 gap-4 px-10 mt-5">
    <div class="gradient-header p-1 rounded-xl flex justify-center">
      <div class="card bordered w-92 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Reservas en línea fáciles</h2>
          <p>
            Deja que tus clientes hagan reservas en línea en tan solo unos
            clics, las 24 horas del día, los 7 días de la semana. Olvídate de
            las llamadas telefónicas, mensajes, y correos electrónicos
            interminables.
          </p>
        </div>
      </div>
    </div>
    <div class="gradient-header p-1 rounded-xl flex justify-center">
      <div class="card bordered w-92 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Calendario centralizado</h2>
          <p>
            Mantén un calendario centralizado de todas tus reservas y citas.
            Nunca más tendrás que preocuparte por la superposición de horarios o
            la falta de comunicación.
          </p>
        </div>
      </div>
    </div>
    <div class="gradient-header p-1 rounded-xl flex justify-center">
      <div class="card bordered w-92 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Recordarios automatizados</h2>
          <p>
            Reduce las ausencias y los olvidos con recordatorios automatizados
            vía correo electrónico o mensaje por whatsApp.
          </p>
        </div>
      </div>
    </div>
    <div class="gradient-header p-1 rounded-xl flex justify-center">
      <div class="card bordered w-92 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Personalización</h2>
          <p>
            Ajusta la plataforma a las necesidades específicas de tu negocio.
            Configura los servicios, horarios y disponibilidad de acuerdo a tus
            preferencias.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="flex flex-col w-full lg:flex-row mb-20 px-10">
  <div class="grid flex-grow w-1/2">
    <h1 class="text-5xl font-bold pb-5">¿Por qué elegirnos?</h1>
    <p>
      En Iris, entendemos las necesidades de las pequeñas y medianas empresas.
      Sabemos que tu tiempo y recursos son limitados, y es por eso que hemos
      desarrollado una solución accesible y fácil de usar que se adapta a tu
      negocio. Nuestra plataforma es confiable, segura y escalable, lo que
      significa que puedes crecer sin preocupaciones.
    </p>
  </div>
  <div class="divider lg:divider-horizontal" />
  <div class="grid flex-grow w-1/2">
    <h1 class="text-5xl font-bold">Comienza hoy mismo</h1>
    <p>
      No esperes más para mejorar la gestión de reservas en tu negocio.
      Regístrate en Iris y descubre lo fácil que puede ser. Ofrecemos un período
      de prueba gratuito, para que puedas experimentar todos los beneficios sin
      compromiso.
    </p>
  </div>
</div>

<!-- Demo section -->
<div class="w-full h-80 gradient-footer gap-10">
  <div class="flex flex-col justify-center items-center h-full">
    <h1 class="text-5xl font-bold text-white pb-10">¿Listo para comenzar?</h1>
    <div>
      <button
        class="w-40 mt-4 py-2 px-4 mr-4 text-white bg-violeta hover:shadow-md hover:opacity-80 rounded-lg"
      >
        Ver demo
      </button>
      <a href="/registro">
        <button
          class="w-40 mt-4 py-2 px-4 ml-4 text-white bg-violeta hover:shadow-md hover:opacity-80 rounded-lg"
          >Registrarse</button
        ></a>
    </div>
  </div>
</div>

<!-- Contact section -->
<div class="mt-16 mb-36 px-40">
  <div class="hero">
    <div class="hero-content w-full">
      <img src={collab2} alt="" class="w-1/4" />
      <div class="w-1/2">
        <h1 class="text-5xl font-bold">
          Nuestro equipo de soporte está aquí para ayudarte
        </h1>
        <p class="py-6">
          Nuestro compromiso no se detiene en la inscripción. Estamos aquí para
          responder a tus preguntas y proporcionar asistencia en cada paso del
          camino. Tu éxito es nuestro éxito. ¿Tienes alguna pregunta o necesitas
          más información? Estamos aquí para ayudarte.
        </p>
        <a href="/contacto">
        <button
          class="w-40 mt-4 py-2 text-white bg-violeta hover:shadow-md hover:opacity-80 rounded-lg"
          >Ponte en contacto</button
        ></a>
      </div>
      <img src={collab3} alt="" class="w-1/4" />
    </div>
  </div>
</div>

<!-- footer -->
<PublicFooter />
