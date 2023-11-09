<script>
  import calendario from "../asset/calendario.png";
  import clientes from "../asset/clientes.png";
  import colaboradores from "../asset/colaboradores.png";

  let currentSlide = 0;
  let images = [
    calendario,
    clientes,
    colaboradores,
  ];

  function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
  }
</script>

<style>
  .carousel-container {
    position: relative;
    display: inline-block;
  }

  .carousel-image {
    max-width: 100%;
    height: auto;
  }

  .prev-button,
  .next-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
  }

  .prev-button {
    left: 10px;
  }

  .next-button {
    right: 10px;
  }
</style>

<div class="carousel-container">
  <button on:click={prevSlide} class="prev-button">&lt;</button>
  <img src={images[currentSlide]} alt="Slide" class="carousel-image" />
  <button on:click={nextSlide} class="next-button">&gt;</button>
</div>

