<!-- === TYPESCRIPT === -->
<script lang="ts">
  import type { PageData } from './$types';
  import ComponentPage from '$lib/page/ComponentPage.svelte';
  import SvgIconsStatic_Attributes from '$lib/tabs/SvgIconsStatic_Attributes.svelte';
  import { createSyntaxProps } from '$lib/tabs/SvgIconsStatic_Syntax';
  import {
    InputColor,
    InputCssRotation,
    InputCssSize,
    InputNumber,
    InputText,
  } from '$lib/components/inputs';

  import { SvgCaret } from '@mcisne4/svelte-lib/svg';
  const svg = SvgCaret;

  export let data: PageData;

  const componentName = data.componentName;
  const props = { ...createSyntaxProps(componentName), componentName, code: data.code };

  // --- STYLE PROP --- //
  let values: {
    fill?: string;
    stroke?: string;
    strokeWidth?: string;
    height?: string;
    rotate?: string;
    transition?: string;
  } = {};

  let style: string;
  $: {
    style = '';
    Object.entries(values).forEach(([key, value]) => {
      key = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      style += `--svg-${key}: ${value};`;
    });
  }
</script>

<!-- === COMPONENT === -->
<ComponentPage {...props}>
  <!-- --- SVG --- -->
  <div class="svg">
    <!-- <SvgCaret {style} /> -->
    <svelte:component this={svg} {style} />
  </div>

  <!-- --- TAB: Attributes --- -->
  <SvgIconsStatic_Attributes slot="attributes" cssVariableFallbacks={data.cssFallbacks} />

  <!-- --- TAB: Playground --- -->
  <div slot="playground">
    <h2>Attribute: <em>style</em></h2>
    <!-- ___ --svg-fill ___ -->
    <InputColor
      description="--svg-fill"
      defaultValue="none"
      on:valid={(e) => (values.fill = e.detail)}
    />

    <!-- ___ --svg-stroke ___ -->
    <InputColor
      description="--svg-stroke"
      defaultValue="#000000"
      on:valid={(e) => (values.stroke = e.detail)}
    />

    <!-- ___ --svg-stroke-width ___ -->
    <InputNumber
      description="--svg-stroke-width"
      defaultValue={80}
      on:valid={(e) => (values.strokeWidth = e.detail)}
      inputWidth="5rem"
    />

    <!-- ___ --svg-height ___ -->
    <InputCssSize
      description="--svg-height"
      defaultValue={10}
      defaultUnit="rem"
      on:valid={(e) => (values.height = e.detail)}
      inputWidth="5rem"
    />

    <!-- ___ --svg-rotate ___ -->
    <InputCssRotation
      description="--svg-rotate"
      defaultValue={0}
      defaultUnit="deg"
      on:valid={(e) => (values.rotate = e.detail)}
      inputWidth="5rem"
    />

    <!-- ___ --svg-transition ___ -->
    <InputText
      description="--svg-transition"
      defaultValue="none"
      on:valid={(e) => (values.transition = e.detail)}
    />
  </div>
</ComponentPage>

<!-- === STYLE === -->
<style>
  .svg {
    display: flex;
    --svg-fill: #f6f;
    --svg-stroke: #f0f;
    --svg-height: 10rem;
    --svg-fill: none;
  }
</style>
