<!-- === TYPESCRIPT === -->
<script lang="ts">
  import ComponentPage from '$lib/page/ComponentPage.svelte';
  import SvgIconsStatic_Attributes from '$lib/tabs/SvgIconsStatic_Attributes.svelte';
  import { createSyntaxProps } from '$lib/tabs/SvgIconsStatic_Syntax';
  import { code } from './code';
  import { cssFallbacks } from './cssFallbacks';

  // --- COMPONENT --- //
  import { SvgMoon } from '@mcisne4/svelte-lib/svg';
  const svg = SvgMoon;
  const componentName = 'SvgMoon';

  // --- COMPONENT PAGE PROPS --- //
  const props = {
    ...createSyntaxProps(componentName),
    componentName,
    code,
  };

  // --- STYLE PROP --- //
  let style: string = '';
  import Playground from './Playground.svelte';
</script>

<!-- === COMPONENT === -->
<ComponentPage {...props}>
  <!-- --- SVG --- -->
  <div class="svg">
    <svelte:component this={svg} {style} />
  </div>

  <!-- --- TAB: Attributes --- -->
  <SvgIconsStatic_Attributes slot="attributes" cssVariableFallbacks={cssFallbacks} />

  <!-- --- TAB: Playground --- -->
  <Playground slot="playground" on:styleChange={(e) => (style = e.detail)} />
</ComponentPage>

<!-- === STYLE === -->
<style>
  .svg {
    display: flex;
    --svg-fill: #f6f;
    --svg-stroke: #f0f;
    --svg-height: 11rem;
  }
</style>
