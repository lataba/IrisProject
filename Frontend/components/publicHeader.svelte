<script>
  import logoIris from "../asset/Iris.svg";
  import loginIcon from "../asset/login.svg";
</script>

<div class="navbar fixed z-50 bg-white border-b-2">
  <div class="navbar-start">
    <div class="dropdown">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56">
        <li><a href="/" class="normal-case text-xl">Inicio</a></li>
        <li><a href="/registro" class="normal-case text-xl">Registro</a></li>
        <li class="normal-case text-xl">
          Nosotros
          <ul class="p-2">
            <li><a href="/nosotros" class="normal-case text-xl">¿Quienes somos?</a></li>
            <li><a href="/contacto" class="normal-case text-xl">Contacto</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <a href="/" class="btn btn-ghost normal-case text-xl">
      <img src={logoIris} alt="" class="w-10">
      IRIS
    </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 gap-15">
      <li><a href="/" class="normal-case text-lg font-semibold">INICIO</a></li>
      <li><a href="/registro" class="normal-case text-lg font-semibold">REGISTRO</a></li>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <li tabindex="0">
        <details>
          <summary class="normal-case text-lg font-semibold">NOSOTROS</summary>
          <ul class="p-2 w-52">
            <li><a href="/nosotros" class="normal-case text-xl font-semibold">¿Quienes somos?</a></li>
            <li><a href="/contacto" class="normal-case text-xl font-semibold">Contacto</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div class="navbar-end">
    <a href="/login">
      <img src={loginIcon} alt="" class="w-8">
    </a>
  </div>
</div>


