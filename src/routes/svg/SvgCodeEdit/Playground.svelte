<!-- === TYPESCRIPT === -->
<script lang="ts">
  import {
    InputColor,
    InputCssRotation,
    InputCssSize,
    InputNumber,
    InputText,
  } from '$lib/components/inputs';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  // --- Style Values --- //
  let values: {
    fill?: string;
    stroke?: string;
    strokeWidth?: string;
    height?: string;
    rotate?: string;
    transition?: string;
  } = {};

  // --- Dispatch Style --- //
  let style: string;
  $: {
    style = '';
    Object.entries(values).forEach(([key, value]) => {
      key = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      style += `--svg-${key}: ${value};`;
    });
    dispatch('styleChange', style);
  }
</script>

<!-- === COMPONENT === -->
<div>
  <h2>Attribute: <em>style</em></h2>
  <!-- ___ --svg-fill ___ -->
  <InputColor
    description="--svg-fill"
    defaultValue="#000000"
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
    defaultValue={15}
    on:valid={(e) => (values.strokeWidth = e.detail)}
    inputWidth="5rem"
  />

  <!-- ___ --svg-height ___ -->
  <InputCssSize
    description="--svg-height"
    defaultValue={11}
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
