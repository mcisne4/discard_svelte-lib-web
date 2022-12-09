<!-- === TYPESCRIPT === -->
<script lang="ts">
  import ComponentList from '$lib/components/ComponentList.svelte';
  import ComponentListItem from '$lib/components/ComponentListItem.svelte';
  import { svgIconsStatic } from './component-list';
</script>

<!-- === HEAD === -->
<svelte:head>
  <title>SVG • Svelte Component Library</title>
</svelte:head>

<!-- === COMPONENT === -->
<header><h1>SVG Components</h1></header>

<h2>SVG Icons <em>(static)</em></h2>
<ComponentList>
  {#each svgIconsStatic as { component, componentName, displayName, url, style, hover }}
    <ComponentListItem
      {componentName}
      {displayName}
      {url}
      on:mouseenter={() => (hover = true)}
      on:mouseleave={() => (hover = false)}
      height="10rem"
      width="10rem"
    >
      <div class="svg" class:hover>
        <svelte:component this={component} {style} />
      </div>
    </ComponentListItem>
  {/each}
</ComponentList>

<!-- === STYLE === -->
<style>
  h2 em {
    font-size: 1.4rem;
    color: var(--body-fg-dim);
  }
  .svg {
    display: flex;
    justify-content: center;
    align-items: center;
    --svg-fill: var(--component-list-component-01);
    --svg-stroke: var(--component-list-component-01);
    --svg-height: 4rem;
  }
  .svg.hover {
    --svg-fill: var(--component-list-component-01-hover);
    --svg-stroke: var(--component-list-component-01-hover);
  }
</style>
