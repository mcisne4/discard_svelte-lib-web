<!-- === TYPESCRIPT === -->
<script>
  import { lib_path } from '$store/lib-info';
  import { CodeBlock } from '@mcisne4/svelte-lib/components';
</script>

<!-- === COMPONENT === -->
<header>
  <p class="lib-name"><em>{lib_path}</em></p>
  <h1>Svelte Component Library</h1>
  <p class="subtitle"><em>Documentation</em></p>
</header>

<h2>Library Installation</h2>
<CodeBlock margin="1rem 0" code={`npm install ${lib_path}`} description="Install with NPM" />
<CodeBlock margin="1rem 0" code={`yarn add ${lib_path}`} description="Install with Yarn" />
<CodeBlock margin="1rem 0" code={`pnpm add ${lib_path}`} description="Install with PNPM" />

<h2>Component Categories</h2>
<ul>
  <li><a href="/svg">SVG Components</a></li>
  <li><a href="/page">Page Components</a></li>
  <li><a href="/components">Other Components</a></li>
</ul>

<!-- === STYLE === -->
<style lang="scss">
  header {
    margin: 2rem auto;

    & h1 {
      color: var(--body-fg-highlight);
      font-size: 2.4rem;
    }
    & .lib-name {
      font-size: 1.05rem;
      font-weight: 600;
      letter-spacing: 1px;
    }

    & .subtitle {
      font-size: 1.75rem;
      font-weight: 600;
    }
  }

  li {
    list-style: none;

    & a {
      color: var(--body-fg);

      &:hover {
        color: var(--body-fg-highlight);
      }
    }
  }
</style>
