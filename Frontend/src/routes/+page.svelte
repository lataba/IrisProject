<!-- Home page -->
<script>
  import calendarImg from "../lib/images/calendarImg.png";
  import collab2 from "../lib/images/men.png";
  import collab3 from "../lib/images/womenCollab.png";
  import PresentationCard from "../lib/components/presentationCard.svelte";
  import Typewriting from "../lib/components/typewriting.svelte";
  import Navbar from "../lib/components/navbar.svelte";
  import Footer from "../lib/components/footer.svelte";
</script>

<svelte:head>
  <title>Iris</title>
</svelte:head>

<div class="container dark:bg-black dark:text-white">
  <Navbar />
  <!-- Welcome section -->
  <div class="mt-40 mb-36 dark:bg-black dark:text-white">
    <div class="hero">
      <div
        class="hero-content flex-col justify-between lg:flex-row w-full h-full"
      >
        <div class="w-1/2">
          <h1 class="text-5xl font-bold">Welcome to Iris!</h1>
          <p class="py-6">
            The comprehensive solution your small or medium-sized business needs
            to simplify reservation management. Whether you run a hair salon,
            beauty salon, tattoo parlor, medical practice, or any other type of
            business that requires appointments or reservations, we're here to
            help you automate and improve your process.
          </p>
          <div>
            <a href="/">
              <button
                class="w-40 mt-4 py-2 mr-4 text-white bg-my_violet hover:shadow-md hover:opacity-80 rounded-lg"
                >Get started</button
              ></a
            >
          </div>
        </div>
        <img src={calendarImg} alt="" class="w-1/2" />
      </div>
    </div>
  </div>
  <div class="p-10 dark:bg-black dark:text-white">
    <div class="text-center bg-my_violet h-40 p-5 rounded-md">
      <h1 class="text-3xl font-bold text-white">Who is Iris for?</h1>
      <Typewriting />
    </div>
  </div>

  <!-- What we offer section -->
  <div
    class="mt-20 mb-28 flex flex-col gap-4 items-center justify-center dark:bg-black dark:text-white"
    id="ourOffer"
  >
    <h1 class="text-5xl font-bold">What do we offer?</h1>
    <div class="grid grid-cols-4 gap-4 px-10 mt-5">
      <div class="gradient-header p-1 rounded-xl flex justify-center">
        <div class="card bordered w-92 bg-base-100 dark:bg-black shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Easy Online Reservations</h2>
            <p>
              Let your customers make online reservations in just a few clicks,
              24/7. Forget about endless phone calls, messages, and emails.
            </p>
          </div>
        </div>
      </div>
      <div class="gradient-header p-1 rounded-xl flex justify-center">
        <div class="card bordered w-92 bg-base-100 dark:bg-black shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Centralized Calendar</h2>
            <p>
              Maintain a centralized calendar of all your reservations and
              appointments. Never worry about scheduling conflicts or lack of
              communication again.
            </p>
          </div>
        </div>
      </div>
      <div class="gradient-header p-1 rounded-xl flex justify-center">
        <div class="card bordered w-92 bg-base-100 dark:bg-black shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Automated Reminders</h2>
            <p>
              Reduce no-shows and forgetfulness with automated reminders via
              email or WhatsApp.
            </p>
          </div>
        </div>
      </div>
      <div class="gradient-header p-1 rounded-xl flex justify-center">
        <div class="card bordered w-92 bg-base-100 dark:bg-black shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Customization</h2>
            <p>
              Adjust the platform to the specific needs of your business.
              Configure services, hours, and availability according to your
              preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="flex flex-col w-full lg:flex-row mb-20 px-10 dark:bg-black dark:text-white"
  >
    <div class="grid flex-grow w-1/2 text-right">
      <h1 class="text-5xl font-bold pb-5 text-my_blue">Why Choose Us?</h1>
      <p>
        At Iris, we understand the needs of small and medium-sized businesses.
        We know your time and resources are limited, which is why we've
        developed an affordable and user-friendly solution that adapts to your
        business. Our platform is reliable, secure, and scalable, allowing you
        to grow with peace of mind.
      </p>
    </div>
    <div class="divider lg:divider-horizontal" />
    <div class="grid flex-grow w-1/2 text-left">
      <h1 class="text-5xl font-bold text-my_blue">Start Today</h1>
      <p>
        Don't wait any longer to improve reservation management in your
        business. Register with Iris and discover how easy it can be. We offer a
        free trial period so you can experience all the benefits without
        commitment.
      </p>
    </div>
  </div>

  <!-- Demo section -->
  <div
    class="w-full h-80 gradient-footer gap-10 dark:bg-black dark:text-white"
    id="demo"
  >
    <div class="flex flex-col justify-center items-center h-full">
      <h1 class="text-5xl font-bold text-white pb-10">Ready to Get Started?</h1>
      <div>
        <button
          class="w-40 mt-4 py-2 px-4 mr-4 text-white bg-my_violet hover:shadow-md hover:opacity-80 rounded-lg"
        >
          View Demo
        </button>
        <a href="/">
          <button
            class="w-40 mt-4 py-2 px-4 ml-4 text-white bg-my_violet hover:shadow-md hover:opacity-80 rounded-lg"
            >Get started</button
          ></a
        >
      </div>
    </div>
  </div>

  <!-- Support section -->
  <div class="mt-16 mb-24 px-40 dark:bg-black dark:text-white">
    <div class="hero">
      <div class="hero-content w-full">
        <img src={collab2} alt="" class="w-1/4" />
        <div class="w-1/2">
          <h1 class="text-5xl font-bold">
            Our support team is here to assist you
          </h1>
          <p class="py-6">
            Our commitment doesn't end at registration. We're here to answer
            your questions and provide assistance every step of the way. Your
            success is our success. Do you have any questions or need more
            information? We're here to help.
          </p>
          <a href="/">
            <button
              class="w-40 mt-4 py-2 text-white bg-my_violet hover:shadow-md hover:opacity-80 rounded-lg"
              >Get in touch</button
            ></a
          >
        </div>
        <img src={collab3} alt="" class="w-1/4" />
      </div>
    </div>
  </div>

  <!-- About the proyect section -->
  <div class="p-2 px-10 dark:bg-black dark:text-white" id="about">
    <div class="hero gradient-header p-2 rounded-lg">
      <div
        class="hero-content bg-white dark:bg-black text-center p-10 left-2 right-2 rounded-lg"
      >
        <div>
          <h1 class="text-5xl font-bold mb-8">About the Project:</h1>
          <p class="">
            From the outset of our Holberton journey, we had a clear vision for
            our final project. We aimed to create a functional, useful product
            that primarily catered to individuals who may not be well-versed in
            the world of IT. Our goal was to demonstrate how technological tools
            can simplify and enhance everyday life.
          </p>

          <p class="mt-4">
            Iris is designed with local entrepreneurs in mind, individuals who
            need to streamline their reservation processes, even if they aren't
            tech-savvy. It provides an easily accessible and user-friendly tool
            that empowers both business owners and their customers to manage
            appointments without the hassle of phone calls or lengthy message
            exchanges.
          </p>

          <p class="mt-4">
            While there is still much room for improvement in our product,
            undertaking this project has imparted valuable lessons in time
            management, task organization, teamwork, and the ability to
            recognize, confront, and overcome challenges and obstacles.
            Furthermore, it has afforded us the opportunity to work with a
            variety of tools, such as Django, SvelteKit, Tailwind, and many
            others in the development process.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Meet the team section -->
  <div class="hero mt-12 dark:bg-black dark:text-white" id="team">
    <div class="hero-content text-center">
      <div>
        <h1 class="text-5xl font-bold">Meet the team:</h1>
        <PresentationCard />
      </div>
    </div>
  </div>
  <Footer />
</div>
