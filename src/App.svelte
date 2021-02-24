<script lang="ts">
  import { Router } from 'svelte-router-spa'
  import { routes } from './routes'
</script>

<main>
  <Router {routes} />
</main>

<style>
  main {
    width: 100vw;
    min-height: 100vh;
  }
</style>
