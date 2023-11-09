<script>
  import HeaderClient from "../../components/headerClient.svelte";
  import Body from "../../components/clientBodyPage.svelte";
  import Footer from "../../components/footerClient.svelte";
  import PaginaConfirmacion from "../../components/pageReserva.svelte";
  import logoPelu from "../../asset/Logo-peluqueria.jpg";
</script>

<HeaderClient title="[NOMBRE COMERCIO]" rubro="[Rubro]" />
<img class="profile-picture" src={logoPelu} alt="Foto de perfil" />
<Body />

<PaginaConfirmacion />
<Footer />

<style>
  .profile-picture {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    margin-top: -200px;
    margin-left: 50px;
    position: relative;
    z-index: 1;
  }
</style>
