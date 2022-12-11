<!-- === TYPESCRIPT === -->
<script lang="ts">
  import type { PageData } from './$types';
  import ComponentPage from '$lib/page/ComponentPage.svelte';
  import SvgIconsStatic_Attributes from '$lib/tabs/SvgIconsStatic_Attributes.svelte';
  import { createSyntaxProps } from '$lib/tabs/SvgIconsStatic_Syntax';

  // --- COMPONENT --- //
  import { SvgCodeEdit } from '@mcisne4/svelte-lib/svg';
  const svg = SvgCodeEdit;

  // --- COMPONENT PAGE PROPS --- //
  export let data: PageData;

  const props = {
    ...createSyntaxProps(data.componentName),
    componentName: data.componentName,
    code: data.code,
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
  <SvgIconsStatic_Attributes slot="attributes" cssVariableFallbacks={data.cssFallbacks} />

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
