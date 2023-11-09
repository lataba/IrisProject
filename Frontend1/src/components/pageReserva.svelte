<script>
  import flatpickr from "flatpickr";
  import "flatpickr/dist/flatpickr.min.css";
  import { onMount } from "svelte";

  let serviciosElegidos = [
      {
          Profesional: "Juan",
          Servicio: "Corte de pelo",
      },
      {
          Profesional: "María",
          Servicio: "Manicura",
      },
  ];
  let selectedDate = null;

  onMount(() => {
      flatpickr(".date-picker", {
          dateFormat: "Y-m-d",
          onChange: (selectedDates) => {
              selectedDate = selectedDates[0] || null;
          },
      });
  });
</script>

<div class="container">
  <div class="confirmation-box">
      <div class="title">RESERVAR</div>
      <div class="information">
          {#each serviciosElegidos as servicio}
              <div class="service-card">
                  <p><strong>Profesional:</strong> {servicio.Profesional}</p>
                  <p>
                      <strong>Fecha:</strong>
                      <input
                          class="date-picker"
                          type="text"
                          placeholder="Seleccione la fecha aquí"
                      />
                      {servicio.Fecha}
                  </p>
                  <p><strong>Horarios:</strong> {servicio.Horarios}</p>
                  <p><strong>Servicio:</strong> {servicio.Servicio}</p>
              </div>
          {/each}
      </div>
  </div>
</div>

<style>
  .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2400px; /* Ver este valor porque en realidad es otra pagina, no es aca */
  }

  .confirmation-box {
      width: 80%;
      max-width: 900px;
      background-color: white;
      border: 1px solid black;
      border-radius: 10px;
      padding: 100px;
      text-align: center;
  }

  .title {
      font-family: "Courier New", Courier, monospace;
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 50px;
      position: absolute;
      top: 1100px; /* Ver este valor porque en realidad es otra pagina, no es aca */
      left: 50%;
      transform: translateX(-50%);
  }

  .information {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 16px;
  }

  .date-picker {
      padding: 10px;
      width: 100%;
      margin-bottom: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .service-card {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      border: 1px solid black;
      border-radius: 5px;
      padding: 20px;
      margin: 10px;
      width: 300px;
      background-color: white;
  }
</style>