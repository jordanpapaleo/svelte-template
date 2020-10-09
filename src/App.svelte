<script>
  export let name
</script>

<main>
  <h1>h1 Hello {name}!</h1>
  <h2>h2 Hello {name}!</h2>
  <h3>h3 Hello {name}!</h3>
  <h4>h4 Hello {name}!</h4>
  <h5>h5 Hello {name}!</h5>
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
  <div>
    <button>Button</button>
    <button class="primary">Primary</button>
    <button class="secondary">Secondary</button>
  </div>
  <br />
  <div>
    <button class="large">Large Button</button>
    <button class="large primary">Large Primary</button>
    <button class="large secondary">Large Secondary</button>
  </div>
  <br />
  <div>
    <button class="xlarge">XLarge Button</button>
    <button class="xlarge primary">XLarge Primary</button>
    <button class="xlarge secondary">XLarge Secondary</button>
  </div>
  <ol>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ol>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
  <form action="">
    <label>
      <span class="label">Text input label</span>
      <input type="text" placeholder="placeholder"/>
    </label>
    <label>
      <span class="label">Text area label</span>
      <textarea></textarea>
    </label>
    <label>
      <span class="label">Select label</span>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </label>
  </form>
</main>

<style>
main {
  margin: 50px;
}
</style>
