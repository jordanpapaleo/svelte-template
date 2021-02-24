<script>
  import Input from '../components/Input.svelte'
  import Select from '../components/Select.svelte'
  import Switch from '../components/Switch.svelte'
  import Checkbox from '../components/Checkbox.svelte'
</script>

<div class="Ui-component">
  <h1>Ui</h1>
  <Input />
  <Select />
  <Switch />
  <Checkbox />
</div>

<style>
  .Ui-component {
    display: flex;
    flex-direction: column;
  }
</style>
