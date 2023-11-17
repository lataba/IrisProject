<script>
  import { onMount, onDestroy } from "svelte";

  const words = [
  "Hair Salons",
  "Tattoo Artists",
  "Spa Services",
  "Dentists",
  "Massage Therapists",
  "Personal Trainers",
  "Medical Clinics",
  "Beauty Consultants",
  "Nail Technicians",
  "Chiropractors",
  "Estheticians",
  "Physiotherapists",
  "Barbershops",
  "Acupuncturists",
  "Fitness Instructors"
];
  let currentWordIndex = 0;
  let currentWord = "";
  let typingSpeed = 200;
  let interval;

  function typeWriterEffect() {
    let charIndex = 0;
    let isDeleting = false;

    interval = setInterval(() => {
      if (isDeleting) {
        currentWord = currentWord.slice(0, -1);
      } else {
        currentWord = words[currentWordIndex].slice(0, charIndex);
        charIndex++;
      }

      if (!isDeleting && charIndex > words[currentWordIndex].length) {
        isDeleting = true;
      }

      if (isDeleting && currentWord === "") {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        charIndex = 0;
      }
    }, typingSpeed);
  }

  onMount(() => {
    typeWriterEffect();
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<style>
  .typewriter {
    font-size: 24px;
    font-weight: bold;
  }
</style>

<div class="typewriter text-white py-4"><h1 class="text-6xl">{currentWord}</h1></div>
