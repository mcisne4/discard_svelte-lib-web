<!-- === TYPESCRIPT === -->
<script lang="ts">
  import { lib_version } from '$store/lib-info';
  import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
</script>

<!-- === COMPONENT === -->
<div class="nav-container">
  <nav>
    <p class="title">Svelte Component Library</p>
    <ul>
      <li><a style:width="55px" href="/">Home</a></li>
      <li><a style:width="40px" href="/svg">SVG</a></li>
      <li><a style:width="48px" href="/page-components">Page</a></li>
      <li><a style:width="53px" href="/components">Other</a></li>
    </ul>
  </nav>

  <div class="lib-status">
    <p>Version: <span>{lib_version}</span></p>
    <div class="theme">
      <p>Theme</p>
      <ThemeSwitch />
    </div>
  </div>
</div>

<!-- === STYLE === -->
<style>
  .nav-container {
    margin: 0 calc(-1 * var(--padding));
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    background-color: var(--nav-bg);
    padding: 0 var(--padding);
    transition: background-color 1s;
  }
  .title {
    color: var(--nav-fg-highlight);
    font-weight: 600;
    letter-spacing: 0.5px;
    font-size: 1.1rem;
    padding: 0.2rem 0;
    transition: color 1s;
  }
  ul {
    display: flex;
    gap: 0.2rem;
    padding: 0.15rem;
    height: 3rem;
  }
  li {
    list-style: none;
    padding: 0.3rem 0.5rem 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    text-decoration: none;
    color: var(--nav-fg);
    border-width: 2px;
    border-style: solid;
    border-left: none;
    border-right: none;
    border-top-color: transparent;
    border-bottom-color: var(--nav-fg);
    padding: 0 0.2rem;
    transition: color 0.5s, border-bottom-color 0.5s;
  }
  li:hover {
    background-color: var(--nav-bg-highlight);
  }
  li:hover a {
    color: var(--nav-fg-highlight);
    border-width: 3px;
    border-bottom-color: var(--nav-fg-highlight);
    font-weight: 600;
    transition: color 0.5s, border-bottom-color 0.5s;
  }

  .lib-status {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.15rem var(--padding);
    background-color: var(--nav-status-bg);
    color: var(--nav-status-fg);
    font-size: 0.9rem;
    transition: color 1s, backround-color 1s;
  }
  .theme {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
</style>
