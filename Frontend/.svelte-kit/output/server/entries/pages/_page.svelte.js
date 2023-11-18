import { c as create_ssr_component, d as each, e as escape, f as add_attribute, o as onDestroy, v as validate_component } from "../../chunks/ssr.js";
const calendarImg = "/_app/immutable/assets/calendarImg.2F_2BnWI.png";
const collab2 = "/_app/immutable/assets/men.ILPFe5Fc.png";
const collab3 = "/_app/immutable/assets/womenCollab.Yxkt3Rh4.png";
const Laura = "/_app/immutable/assets/Laura.7yKGbheT.jpg";
const Aldo = "/_app/immutable/assets/Aldo.pQtZHsqn.jpg";
const Luisina = "/_app/immutable/assets/Luisina.96bAeSPr.jpg";
const Gonzalo = "/_app/immutable/assets/Gonzalo.flsEx35G.jpg";
const Rocio = "/_app/immutable/assets/Rocio.3sO5d3vR.jpg";
const linkedin = "/_app/immutable/assets/linkedin.GQwuL13D.png";
const gmail = "/_app/immutable/assets/mail.dldIPj2y.png";
const github = "/_app/immutable/assets/github.7dxZzjQB.png";
const PresentationCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let team = [
    {
      image: Laura,
      name: "Laura Ballesté",
      role: "Project Manager, Backend Developer, DevOps",
      github: "https://github.com/lataba",
      email: "ltballeste@gmail.com",
      linkedin: "https://www.linkedin.com/in/laura-ballest%C3%A9/"
    },
    {
      image: Aldo,
      name: "Aldo Sánchez",
      role: "Backend Developer, QA Tester",
      github: "https://github.com/Aldo2303",
      email: "aldod03@gmail.com",
      linkedin: "https://www.linkedin.com/in/aldo-daniel-s%C3%A1nchez-gonz%C3%A1lez-3a604b280/"
    },
    {
      image: Luisina,
      name: "Luisina Llugdar",
      role: "DevOps, QA Tester",
      github: "https://github.com/LuisinaLlugdar",
      email: "luisina.llugdar@gmail.com",
      linkedin: "https://www.linkedin.com/in/luisina-llugdar-2b304a280/"
    },
    {
      image: Gonzalo,
      name: "Gonzalo Pedernera",
      role: "Frontend Developer, UX/UI Designer",
      github: "https://github.com/gonzalopedernera",
      email: "gonzalopeder2@gmail.com",
      linkedin: "https://www.linkedin.com/in/gonzalo-pedernera-286a6b27b/"
    },
    {
      image: Rocio,
      name: "Rocío Pallas",
      role: "Frontend Developer, UX/UI Designer",
      github: "https://github.com/rociopallas",
      email: "rocio.pallasm@gmail.com",
      linkedin: "www.linkedin.com/in/rocio-pallas-84898a29b"
    }
  ];
  return `<section class="container p-10 md:py-20 px-0 md:p-20 md:px-0 antialiased"><section class="grid lg:grid-cols-5 gap-6">${each(team, (member) => {
    return `<article class="max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group" style="${"background-image: url(" + escape(member.image, true) + ")"}"><div class="bg-black bg-opacity-20 min-h-150 px-10 py-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-50 transform duration-300"><h1 class="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">${escape(member.name)}</h1> <div class="w-16 h-2 bg-my_violet rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300" data-svelte-h="svelte-ii9uj7"></div> <p class="opacity-0 text-white group-hover:opacity-80 transform duration-500 text-base">${escape(member.role)}</p> <div class="mt-4 flex space-x-2 opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500"><a${add_attribute("href", member.linkedin, 0)} target="_blank" rel="noopener noreferrer"><img class="w-10"${add_attribute("src", linkedin, 0)} alt=""></a> <a${add_attribute("href", "mailto:" + member.email, 0)} target="_blank" rel="noopener noreferrer"><img class="w-10"${add_attribute("src", gmail, 0)} alt=""></a> <a${add_attribute("href", member.github, 0)} target="_blank" rel="noopener noreferrer"><img class="w-10"${add_attribute("src", github, 0)} alt=""></a> </div></div> </article>`;
  })}</section></section>`;
});
const css = {
  code: ".typewriter.svelte-fj3why{font-size:24px;font-weight:bold}",
  map: null
};
const Typewriting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentWord = "";
  let interval;
  onDestroy(() => {
    clearInterval(interval);
  });
  $$result.css.add(css);
  return `<div class="typewriter text-white py-4 svelte-fj3why"><h1 class="text-6xl">${escape(currentWord)}</h1></div>`;
});
const logoIris = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='1080'%20zoomAndPan='magnify'%20viewBox='0%200%20810%20809.999993'%20height='1080'%20preserveAspectRatio='xMidYMid%20meet'%20version='1.0'%3e%3cdefs%3e%3cclipPath%20id='8a403ae90d'%3e%3cpath%20d='M%20409.746094%200%20L%20810%200%20L%20810%20400.253906%20L%20409.746094%20400.253906%20Z%20M%20409.746094%200%20'%20clip-rule='nonzero'/%3e%3c/clipPath%3e%3cclipPath%20id='7a788ff413'%3e%3cpath%20d='M%200%200%20L%20400.253906%200%20L%20400.253906%20400.253906%20L%200%20400.253906%20Z%20M%200%200%20'%20clip-rule='nonzero'/%3e%3c/clipPath%3e%3cclipPath%20id='03f3eef0fe'%3e%3cpath%20d='M%200%20409.746094%20L%20400.253906%20409.746094%20L%20400.253906%20810%20L%200%20810%20Z%20M%200%20409.746094%20'%20clip-rule='nonzero'/%3e%3c/clipPath%3e%3cclipPath%20id='0a50956b11'%3e%3cpath%20d='M%20409.746094%20409.746094%20L%20810%20409.746094%20L%20810%20810%20L%20409.746094%20810%20Z%20M%20409.746094%20409.746094%20'%20clip-rule='nonzero'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%238a403ae90d)'%3e%3cpath%20fill='%239f53ff'%20d='M%20810%20200.125%20C%20810%2089.597656%20720.402344%200.00390625%20609.875%200.00390625%20C%20499.351562%200.00390625%20409.746094%2089.597656%20409.746094%20200.125%20L%20409.746094%20400.25%20L%20609.875%20400.25%20C%20720.402344%20400.25%20810%20310.640625%20810%20200.125%20Z%20M%20810%20200.125%20'%20fill-opacity='1'%20fill-rule='nonzero'/%3e%3c/g%3e%3cg%20clip-path='url(%237a788ff413)'%3e%3cpath%20fill='%2315faa7'%20d='M%20200.125%200%20C%2089.597656%200%200.00390625%2089.597656%200.00390625%20200.125%20C%200.00390625%20310.648438%2089.597656%20400.253906%20200.125%20400.253906%20L%20400.25%20400.253906%20L%20400.25%20200.125%20C%20400.25%2089.597656%20310.640625%200%20200.125%200%20Z%20M%20200.125%200%20'%20fill-opacity='1'%20fill-rule='nonzero'/%3e%3c/g%3e%3cg%20clip-path='url(%2303f3eef0fe)'%3e%3cpath%20fill='%239f53ff'%20d='M%200%20609.875%20C%200%20720.402344%2089.597656%20809.996094%20200.125%20809.996094%20C%20310.648438%20809.996094%20400.253906%20720.402344%20400.253906%20609.875%20L%20400.253906%20409.75%20L%20200.125%20409.75%20C%2089.597656%20409.75%200%20499.359375%200%20609.875%20Z%20M%200%20609.875%20'%20fill-opacity='1'%20fill-rule='nonzero'/%3e%3c/g%3e%3cg%20clip-path='url(%230a50956b11)'%3e%3cpath%20fill='%2315faa7'%20d='M%20609.875%20810%20C%20720.402344%20810%20809.996094%20720.402344%20809.996094%20609.875%20C%20809.996094%20499.351562%20720.402344%20409.746094%20609.875%20409.746094%20L%20409.75%20409.746094%20L%20409.75%20609.875%20C%20409.75%20720.402344%20499.359375%20810%20609.875%20810%20Z%20M%20609.875%20810%20'%20fill-opacity='1'%20fill-rule='nonzero'/%3e%3c/g%3e%3c/svg%3e";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="navbar fixed top-0 z-50 border-b-2 px-24 bg-white dark:bg-black dark:text-white"><div class="navbar-start" data-svelte-h="svelte-1c5b574"><a href="/" class="btn btn-ghost normal-case text-xl"><img${add_attribute("src", logoIris, 0)} alt="" class="w-10">
      IRIS</a></div> <div class="navbar-end"><div class="dropdown dropdown-end" data-svelte-h="svelte-1n3so2u">  <label tabindex="0" class="btn btn-ghost btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg></label>  <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"><li><a href="/">Home</a></li> <li><a href="#ourOffer">What do we offer?</a></li> <li><a href="#demo">Demo</a></li> <li><a href="#about">About the project</a></li> <li><a href="#team">Meet the team</a></li> <li><a href="#contact">Contact</a></li></ul></div> <label class="swap swap-rotate" for="mode-switch"> <input type="checkbox" id="mode-switch" class="hidden">  <svg class="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"></path></svg>  <svg class="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path></svg></label></div></div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  <hr> <footer class="footer items-center p-4 max-h-16 bottom-0 bg-white dark:bg-black text-my_blue" data-svelte-h="svelte-14lix6"><aside class="items-center grid-flow-col"><img${add_attribute("src", logoIris, 0)} alt="" class="w-10"> <p>IRIS - 2023, Holberton final project</p></aside> <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end"><a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><style>svg{fill:#7A8ADA}</style><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg></a> <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 496 512"><style>svg{fill:#7A8ADA}</style><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a></nav></footer>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  ${$$result.head += `<!-- HEAD_svelte-g6knuc_START -->${$$result.title = `<title>Iris</title>`, ""}<!-- HEAD_svelte-g6knuc_END -->`, ""} <div class="container dark:bg-black dark:text-white">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}  <div class="mt-40 mb-36 dark:bg-black dark:text-white" data-svelte-h="svelte-15azr2x"><div class="hero"><div class="hero-content flex-col justify-between lg:flex-row w-full h-full"><div class="w-1/2"><h1 class="text-5xl font-bold">Welcome to Iris!</h1> <p class="py-6">The comprehensive solution your small or medium-sized business needs
            to simplify reservation management. Whether you run a hair salon,
            beauty salon, tattoo parlor, medical practice, or any other type of
            business that requires appointments or reservations, we&#39;re here to
            help you automate and improve your process.</p> <div><a href="/"><button class="w-40 mt-4 py-2 mr-4 text-white bg-my_violet hover:shadow-md hover:opacity-80 rounded-lg">Get started</button></a></div></div> <img${add_attribute("src", calendarImg, 0)} alt="" class="w-1/2"></div></div></div> <div class="p-10 dark:bg-black dark:text-white"><div class="text-center bg-my_violet h-40 p-5 rounded-md"><h1 class="text-3xl font-bold text-white" data-svelte-h="svelte-l0wmyx">Who is Iris for?</h1> ${validate_component(Typewriting, "Typewriting").$$render($$result, {}, {}, {})}</div></div>  <div class="mt-20 mb-28 flex flex-col gap-4 items-center justify-center dark:bg-black dark:text-white" id="ourOffer" data-svelte-h="svelte-7bkzrh"><h1 class="text-5xl font-bold">What do we offer?</h1> <div class="grid grid-cols-4 gap-4 px-10 mt-5"><div class="gradient-header p-1 rounded-xl flex justify-center"><div class="card bordered w-92 bg-base-100 dark:bg-black shadow-xl"><div class="card-body"><h2 class="card-title">Easy Online Reservations</h2> <p>Let your customers make online reservations in just a few clicks,
              24/7. Forget about endless phone calls, messages, and emails.</p></div></div></div> <div class="gradient-header p-1 rounded-xl flex justify-center"><div class="card bordered w-92 bg-base-100 dark:bg-black shadow-xl"><div class="card-body"><h2 class="card-title">Centralized Calendar</h2> <p>Maintain a centralized calendar of all your reservations and
              appointments. Never worry about scheduling conflicts or lack of
              communication again.</p></div></div></div> <div class="gradient-header p-1 rounded-xl flex justify-center"><div class="card bordered w-92 bg-base-100 dark:bg-black shadow-xl"><div class="card-body"><h2 class="card-title">Automated Reminders</h2> <p>Reduce no-shows and forgetfulness with automated reminders via
              email or WhatsApp.</p></div></div></div> <div class="gradient-header p-1 rounded-xl flex justify-center"><div class="card bordered w-92 bg-base-100 dark:bg-black shadow-xl"><div class="card-body"><h2 class="card-title">Customization</h2> <p>Adjust the platform to the specific needs of your business.
              Configure services, hours, and availability according to your
              preferences.</p></div></div></div></div></div> <div class="flex flex-col w-full lg:flex-row mb-20 px-10 dark:bg-black dark:text-white" data-svelte-h="svelte-1y9oqz0"><div class="grid flex-grow w-1/2 text-right"><h1 class="text-5xl font-bold pb-5 text-my_blue">Why Choose Us?</h1> <p>At Iris, we understand the needs of small and medium-sized businesses.
        We know your time and resources are limited, which is why we&#39;ve
        developed an affordable and user-friendly solution that adapts to your
        business. Our platform is reliable, secure, and scalable, allowing you
        to grow with peace of mind.</p></div> <div class="divider lg:divider-horizontal"></div> <div class="grid flex-grow w-1/2 text-left"><h1 class="text-5xl font-bold text-my_blue">Start Today</h1> <p>Don&#39;t wait any longer to improve reservation management in your
        business. Register with Iris and discover how easy it can be. We offer a
        free trial period so you can experience all the benefits without
        commitment.</p></div></div>  <div class="w-full h-80 gradient-footer gap-10 dark:bg-black dark:text-white" id="demo" data-svelte-h="svelte-ylyzrw"><div class="flex flex-col justify-center items-center h-full"><h1 class="text-5xl font-bold text-white pb-10">Ready to Get Started?</h1> <div><button class="w-40 mt-4 py-2 px-4 mr-4 text-white bg-my_violet hover:shadow-md hover:opacity-80 rounded-lg">View Demo</button> <a href="/"><button class="w-40 mt-4 py-2 px-4 ml-4 text-white bg-my_violet hover:shadow-md hover:opacity-80 rounded-lg">Get started</button></a></div></div></div>  <div class="mt-16 mb-24 px-40 dark:bg-black dark:text-white" data-svelte-h="svelte-1qcu5fq"><div class="hero"><div class="hero-content w-full"><img${add_attribute("src", collab2, 0)} alt="" class="w-1/4"> <div class="w-1/2"><h1 class="text-5xl font-bold">Our support team is here to assist you</h1> <p class="py-6">Our commitment doesn&#39;t end at registration. We&#39;re here to answer
            your questions and provide assistance every step of the way. Your
            success is our success. Do you have any questions or need more
            information? We&#39;re here to help.</p> <a href="/"><button class="w-40 mt-4 py-2 text-white bg-my_violet hover:shadow-md hover:opacity-80 rounded-lg">Get in touch</button></a></div> <img${add_attribute("src", collab3, 0)} alt="" class="w-1/4"></div></div></div>  <div class="p-2 px-10 dark:bg-black dark:text-white" id="about" data-svelte-h="svelte-fz8vgx"><div class="hero gradient-header p-2 rounded-lg"><div class="hero-content bg-white dark:bg-black text-center p-10 left-2 right-2 rounded-lg"><div><h1 class="text-5xl font-bold mb-8">About the Project:</h1> <p class="">From the outset of our Holberton journey, we had a clear vision for
            our final project. We aimed to create a functional, useful product
            that primarily catered to individuals who may not be well-versed in
            the world of IT. Our goal was to demonstrate how technological tools
            can simplify and enhance everyday life.</p> <p class="mt-4">Iris is designed with local entrepreneurs in mind, individuals who
            need to streamline their reservation processes, even if they aren&#39;t
            tech-savvy. It provides an easily accessible and user-friendly tool
            that empowers both business owners and their customers to manage
            appointments without the hassle of phone calls or lengthy message
            exchanges.</p> <p class="mt-4">While there is still much room for improvement in our product,
            undertaking this project has imparted valuable lessons in time
            management, task organization, teamwork, and the ability to
            recognize, confront, and overcome challenges and obstacles.
            Furthermore, it has afforded us the opportunity to work with a
            variety of tools, such as Django, SvelteKit, Tailwind, and many
            others in the development process.</p></div></div></div></div>  <div class="hero mt-12 dark:bg-black dark:text-white" id="team"><div class="hero-content text-center"><div><h1 class="text-5xl font-bold" data-svelte-h="svelte-tlnk8s">Meet the team:</h1> ${validate_component(PresentationCard, "PresentationCard").$$render($$result, {}, {}, {})}</div></div></div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
