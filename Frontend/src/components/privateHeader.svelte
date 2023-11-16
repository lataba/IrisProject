<script>
  import logoIris from '../asset/Iris.svg';
  import loginIcon from '../asset/login.svg';
</script>

<div class="navbar fixed z-50  border-b-2">
  <div class="navbar-start">
    <div class="dropdown">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56">
        <li><a href="/negocio/[slug]/">Inicio</a></li>
        <li>
          Mi negocio
          <ul class="p-2">
            <li><a href="/negocio/[slug]/miNegocio">Perfil de negocio</a></li>
            <li><a href="/negocio/[slug]/servicios">Mis servicios</a></li>
            <li><a href="/negocio/[slug]/colaboradores">Mis colaboradores</a></li>
            <li><a href="/negocio/[slug]/clientes">Mis clientes</a></li>
            <li><a href="/negocio/[slug]/enlace">Mi enlace</a></li>
          </ul>
        </li>
        <li><a href="/negocio/[slug]/agenda">Mi agenda</a></li>
      </ul>
    </div>
    <a href="/" class="btn btn-ghost normal-case text-xl">
      <img src={logoIris} alt="" class="w-10">
      IRIS
    </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 gap-15 text-lg font-semibold">
      <li><a href="/negocio/[slug]">INICIO</a></li>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <li tabindex="0">
        <details>
          <summary>MI NEGOCIO</summary>
          <ul class="p-2 w-52">
            <li><a href="/negocio/[slug]/miNegocio">Perfil de negocio</a></li>
            <li><a href="/negocio/[slug]/servicios">Mis servicios</a></li>
            <li><a href="/negocio/[slug]/colaboradores">Mis colaboradores</a></li>
            <li><a href="/negocio/[slug]/clientes">Mis clientes</a></li>
            <li><a href="/negocio/[slug]/enlace">Mi enlace</a></li>
          </ul>
        </details>
      </li>
      <li><a href="/negocio/[slug]/agenda">MI AGENDA</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a href="/login">
      <img src={loginIcon} alt="" class="w-8">
    </a>
  </div>
</div>