<!-- === TYPESCRIPT === -->
<script lang="ts">
  import ComponentList from '$lib/components/ComponentList.svelte';
  import ComponentListItem from '$lib/components/ComponentListItem.svelte';
  import { svgIconsStatic } from './component-list';
  import { svgIconsStatic2, svgIconsStatic4 } from './list_svgStaticIcon';

  import { SvgCaret } from '@mcisne4/svelte-lib/svg';

  // svgIconsStatic = svgIconsStatic

  const svgIconsStatic3 = [
    {
      component: SvgCaret,
      componentName: 'SvgCaret',
      displayName: 'Caret',
      url: '/svg',
      hovered: false,
    },
  ];

  const svgIconsStatic5 = svgIconsStatic4.map((vals) => {
    return { ...vals, hovered: false };
  });
</script>

<!-- === HEAD === -->
<svelte:head>
  <title>SVG • Svelte Component Library</title>
</svelte:head>

<!-- === COMPONENT === -->
<header><h1>SVG Components</h1></header>

<h2>SVG Icons v2</h2>
<ComponentList>
  {#each svgIconsStatic5 as { component, componentName, displayName, url, hovered }}
    <ComponentListItem
      {componentName}
      {displayName}
      {url}
      width="10rem"
      height="10rem"
      on:mouseenter={(e) => {
        let initial = hovered;
        hovered = true;
        console.clear();
        console.log(`Enter Hover:\n\t${initial} => ${hovered}`);
      }}
      on:mouseleave={(e) => {
        let initial = hovered;
        hovered = false;
        console.log(`Exit Hover:\n\t${initial} => ${hovered}`);
      }}
    >
      <!--  -->
      <p>Hovered: <em>{hovered}</em></p>
    </ComponentListItem>
  {/each}
</ComponentList>

<h2>SVG Icons <em>(static)</em></h2>
<ComponentList>
  {#each svgIconsStatic as { component, componentName, displayName, url, style, hover } (componentName)}
    <ComponentListItem
      {componentName}
      {displayName}
      {url}
      on:mouseenter={() => {
        console.clear();
        hover = true;
        console.log('Mouse Enter', hover);
      }}
      on:mouseleave={() => {
        hover = false;
        console.log('Mouse Leave', hover);
      }}
      height="10rem"
      width="10rem"
    >
      <div class="svg" class:hover>
        <p>{hover}</p>
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
