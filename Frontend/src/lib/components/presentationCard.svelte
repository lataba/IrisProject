<script>
  import Laura from "../images/Laura.jpg";
  import Aldo from "../images/Aldo.jpg";
  import Luisina from "../images/Luisina.jpg";
  import Gonzalo from "../images/Gonzalo.jpg";
  import Rocio from "../images/Rocio.jpg";
  import linkedin from "../images/linkedin.png";
  import gmail from "../images/mail.png";
  import github from "../images/github.png";

  let team = [
    {
      image: Laura,
      name: "Laura Ballesté",
      role: "Project Manager, Backend Developer, DevOps",
      github: "https://github.com/lataba",
      email: "ltballeste@gmail.com",
      linkedin: "https://www.linkedin.com/in/laura-ballest%C3%A9/",
    },
    {
      image: Aldo,
      name: "Aldo Sánchez",
      role: "Backend Developer, QA Tester",
      github: "https://github.com/Aldo2303",
      email: "aldod03@gmail.com",
      linkedin: "https://www.linkedin.com/in/aldo-daniel-s%C3%A1nchez-gonz%C3%A1lez-3a604b280/",
    },
    {
      image: Luisina,
      name: "Luisina Llugdar",
      role: "DevOps, QA Tester",
      github: "https://github.com/LuisinaLlugdar",
      email: "luisina.llugdar@gmail.com",
      linkedin: "https://www.linkedin.com/in/luisina-llugdar-2b304a280/",
    },
    {
      image: Gonzalo,
      name: "Gonzalo Pedernera",
      role: "Frontend Developer, UX/UI Designer",
      github: "https://github.com/gonzalopedernera",
      email: "gonzalopeder2@gmail.com",
      linkedin: "https://www.linkedin.com/in/gonzalo-pedernera-286a6b27b/",
    },
    {
      image: Rocio,
      name: "Rocío Pallas",
      role: "Frontend Developer, UX/UI Designer",
      github: "https://github.com/rociopallas",
      email: "rocio.pallasm@gmail.com",
      linkedin: "www.linkedin.com/in/rocio-pallas-84898a29b",
    },
  ];
</script>

<section class="container p-10 md:py-20 px-0 md:p-20 md:px-0 antialiased">
  <section class="grid lg:grid-cols-5 gap-6">
    {#each team as member (member.name)}
      <article class="max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group" style="background-image: url({member.image})">
          <div class="bg-black bg-opacity-20 min-h-150 px-10 py-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-50 transform duration-300">
              <h1 class="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                  {member.name}
              </h1>
              <div class="w-16 h-2 bg-my_violet rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
              </div>
              <p class="opacity-0 text-white group-hover:opacity-80 transform duration-500 text-base">
                  {member.role}
              </p>
              <div class="mt-4 flex space-x-2 opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <img class="w-10" src={linkedin} alt="">
                </a>
                <a href={"mailto:" + member.email} target="_blank" rel="noopener noreferrer">
                  <img class="w-10" src={gmail} alt="">
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <img class="w-10" src={github} alt="">
                </a>
            </div>
          </div>
      </article>
    {/each}
  </section>
</section>
