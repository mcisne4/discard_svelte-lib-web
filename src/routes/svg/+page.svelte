<!-- === TYPESCRIPT === -->
<script lang="ts">
  import {
    SvgCarrot,
    SvgCode,
    SvgCodeEdit,
    SvgCodePage,
    SvgHome,
    SvgMoon,
    SvgSun,
  } from '@mcisne4/svelte-lib/svg';
  import ComponentList from '$lib/components/ComponentList.svelte';
  import type { ComponentType } from 'svelte';
  import ComponentListItem from '$lib/components/ComponentListItem.svelte';

  // --- SVG Icons Static --- //
  function createSvgList(components: { svg: ComponentType; style?: string }[]) {
    return components
      .map(({ svg, style }) => {
        return {
          svg,
          style: style ? style : '',
          componentName: svg.name ? svg.name : '',
          hover: false,
        };
      })
      .map(({ svg, style, componentName, hover }) => {
        let displayName: string = componentName;
        if (displayName.toLowerCase().startsWith('svg')) displayName = displayName.slice(3);
        displayName = displayName
          .replace(/_/g, ' ')
          .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
          .replace(/([a-z])([0-9])/g, '$1 $2')
          .replace(/([0-9])([a-z])/g, '$1 $2')
          .trim();
        return {
          svg,
          style,
          componentName,
          displayName,
          url: `svg/${componentName}`,
          hover,
        };
      })
      .sort((a, b) => {
        if (a.displayName > b.displayName) return 1;
        if (a.displayName < b.displayName) return -1;
        return 0;
      });
  }

  const svgIcons_static = createSvgList([
    { svg: SvgCarrot, style: '--svg-fill: none;' },
    { svg: SvgCode },
    { svg: SvgCodeEdit },
    { svg: SvgCodePage },
    { svg: SvgHome },
    { svg: SvgMoon },
    { svg: SvgSun },
  ]);
</script>

<!-- === HEAD === -->
<svelte:head>
  <title>SVG • Svelte Component Library</title>
</svelte:head>

<!-- === COMPONENT === -->
<header><h1>SVG Components</h1></header>

<h2>SVG Icons <em>(static)</em></h2>
<ComponentList>
  {#each svgIcons_static as { svg, componentName, displayName, url, style, hover }}
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
        <svelte:component this={svg} {style} />
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
