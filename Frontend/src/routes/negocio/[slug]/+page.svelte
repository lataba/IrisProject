<script>
  import colaboradores from "../../../asset/growupBusiness.png";
</script>

<div
  class="flex flex-col gap-5 mt-20 mb-36 justify-center items-center text-black"
>
  <div class="flex justify-between items-center p-20 h-96">
    <div class="items-center justify-center w-1/2 space">
      <img src={colaboradores} alt="colaboradores" class=" w-3/4" />
    </div>
    <div class="gradient-header p-1 rounded-2xl w-1/2">
      <div
        class="flex flex-col justify-center items-center bg-white rounded-2xl gap-2 p-2"
      >
        <h1 class="text-4xl font-semibold pb-5">Preguntas frecuentes</h1>

        <div class="collapse collapse-arrow bg-white border border-black">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            ¿Cómo agregar servicios?
          </div>
          <div class="collapse-content">
            <p>
              Dirigete a la página "Mis servicios" dentro de la sección "Mi
              negocio" en la barra de navegación y presiona el botón "agregar
              servicio".
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow bg-white border border-black">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            ¿Como agregar colaboradores?
          </div>
          <div class="collapse-content">
            <p>
              Dirigete a la página "Mis colaboradores" dentro de la sección "Mi
              negocio" en la barra de navegación y presiona el botón "agregar
              colaborador".
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow bg-white border border-black">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            ¿Cómo se agendan mis clientes?
          </div>
          <div class="collapse-content">
            <p>
              Dirigete a la pagina "Mi enlace" dentro de la sección "Mi
              negocio". Ahí encontraras un enlace con el cual tus clientes
              podran acceder a una interfaz donde realizar reservas de manera
              rapida y sencilla.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
