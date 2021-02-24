<script>
  import { Navigate } from 'svelte-router-spa'
  import { state } from '../stores'
  console.log(state)
</script>

<div class="Home-component">
  <h1>Home</h1>
  <Navigate to="/ui">
    <button>Ui</button>
  </Navigate>
</div>

<style>
  .Home-component {
  }
</style>
