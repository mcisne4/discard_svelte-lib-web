<!-- === TYPESCRIPT === -->
<script lang="ts">
  import '../style/global.scss';
  import { theme } from '$store/theme';
  import { onMount } from 'svelte';

  // --- THEME --- //
  let body: HTMLElement | null = null;
  onMount(() => {
    body = document.body;
  });

  $: if (body && $theme === 'dark') {
    body.classList.add('theme-dark');
    body.classList.remove('theme-light');
  } else if (body && $theme === 'light') {
    body.classList.add('theme-light');
    body.classList.remove('theme-dark');
  }
</script>

<!-- === HEAD === -->
<svelte:head>
  <title>Svelte Component Library</title>
</svelte:head>

<!-- === COMPONENT === -->
<div class="parent-layout">
  <main>
    <slot />
  </main>
</div>

<style>
  .parent-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: var(--max-width);
    min-width: var(--min-width);
    margin: 0 auto;
    padding: 0 var(--padding) 0;
    background-color: var(--body-bg);
  }
</style>
