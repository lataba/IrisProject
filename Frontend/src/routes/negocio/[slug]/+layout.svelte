<script>
  import Header from "../../../components/privateHeader.svelte";
  import Footer from "../../../components/publicFooter.svelte";
</script>

<Header />
<div class="py-10 ">
  <slot />
</div>
<Footer />
