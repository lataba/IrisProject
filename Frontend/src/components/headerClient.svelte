<!-- Header.svelte -->
<script>
  export let title = "Sitio Reservas";
  export let rubro = "Rubro";
</script>

<header>
  <h1>{title}</h1>
  <h2>{rubro}</h2>
  <button class="share-button">Share</button>
  <button class="info-button">Info</button>
</header>

<style>
  header {
      position: relative;
      background-image: linear-gradient(
              rgba(255, 255, 255, 0.5),
              rgba(255, 255, 255, 0.5)
          ),
          url("../asset/portada-peluqueria.jpg");
      background-size: cover;
      background-position: center;
      color: black;
      padding: 80px;
      text-align: center;
  }

  h1 {
      margin: 0;
      font-size: 30px;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }

  h2 {
      margin: 0;
      font-size: 20px;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }

  .info-button,
  .share-button {
      position: absolute;
      bottom: 15px;
      color: white;
      border: none;
      padding: 0px 30px 50px 50px;
      border-radius: 100%;
      cursor: pointer;
  }

  .info-button {
      right: 130px;
      background-image: url("../asset/infoIcon.png");
      background-size: 40px 40px;
      background-position: center;
      background-repeat: no-repeat;
      text-indent: -9999px;
  }

  .share-button {
      right: 40px;
      background-image: url("../asset/shareIcon.png");
      background-size: 40px 40px;
      background-position: center;
      background-repeat: no-repeat;
      text-indent: -9999px;
  }
</style>