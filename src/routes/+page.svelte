<script>
  import { theme } from '$store/theme';

  function toggleTheme() {
    theme.update((current) => (current === 'dark' ? 'light' : 'dark'));
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={toggleTheme}>Toggle Theme: {$theme}</button>
