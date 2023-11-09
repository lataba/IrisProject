<script>
  import img1 from "../../asset/1.png";
  import img2 from "../../asset/2.png";
  import img3 from "../../asset/3.png";
  import img4 from "../../asset/4.png";
  import img5 from "../../asset/5.png";
  import PublicFooter from "../../components/publicFooter.svelte";
  import PublicHeader from "../../components/publicHeader.svelte";

  const teamMembers = [
    {
      name: "Miembro 1",
      role: "Desarrollador Frontend",
      linkedin: "https://www.linkedin.com/in/miembro1",
      github: "https://github.com/miembro1",
      image: img1, // Utiliza la imagen directamente en lugar de una cadena
    },
    {
      name: "Miembro 2",
      role: "Desarrollador Backend",
      linkedin: "https://www.linkedin.com/in/miembro2",
      github: "https://github.com/miembro2",
      image: img2, // Agrega la URL de la imagen de miembro2
    },
    {
      name: "Miembro 3",
      role: "Diseñador UI/UX",
      linkedin: "https://www.linkedin.com/in/miembro3",
      github: "https://github.com/miembro3",
      image: img3, // Agrega la URL de la imagen de miembro3
    },
    {
      name: "Miembro 4",
      role: "Gerente de Proyecto",
      linkedin: "https://www.linkedin.com/in/miembro4",
      github: "https://github.com/miembro4",
      image: img4, // Agrega la URL de la imagen de miembro4
    },
    {
      name: "Miembro 5",
      role: "QA Tester",
      linkedin: "https://www.linkedin.com/in/miembro5",
      github: "https://github.com/miembro5",
      image: img5, // Agrega la URL de la imagen de miembro5
    },
  ];
</script>

<PublicHeader />
<section class=" py-24">
  <div class="container mx-auto px-4">
    <div class="text-center mb-8">
      <h2 class="text-4xl font-semibold">Acerca de Nosotros</h2>
      <p class="text-gray-600 mt-2">
        Aquí puedes encontrar información sobre nuestro equipo y nuestro
        proyecto.
      </p>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
    >
      {#each teamMembers as member (member.name)}
        <div class="bg-white rounded-lg p-4 shadow-md">
          <img
            src={member.image}
            alt={member.name}
            class="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h3 class="text-xl font-semibold">{member.name}</h3>
          <p class="text-gray-500 mb-2">{member.role}</p>
          <div class="flex justify-center space-x-4">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
<PublicFooter />