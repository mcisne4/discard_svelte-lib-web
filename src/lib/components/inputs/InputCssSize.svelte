<!-- === TYPESCRIPT === -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  // --- Props --- //
  export let defaultValue: number;
  export let defaultUnit: string;
  export let description: string;
  export let validate: (currentValue: number, currentUnit: string) => boolean = (
    currentValue: number,
    currentUnit: string,
  ) => true;
  export let inputWidth = 'auto';

  // --- Units --- //
  const validUnits = [
    'cm',
    'mm',
    'Q',
    'in',
    'pc',
    'pt',
    'px',
    'em',
    'ex',
    'ch',
    'rem',
    'lh',
    'rlh',
    'vw',
    'vh',
    'vmin',
    'vmax',
    'vb',
    'vi',
    'svw',
    'svh',
    'lvw',
    'lvh',
    'dvw',
    'dvh',
    '%',
  ];
  if (!validUnits.includes(defaultUnit)) {
    defaultUnit = 'px';
  }

  // --- On Value Change --- //
  let value: number;
  let unit: string;
  let active = false;

  $: if (active) {
    if (validate(value, unit)) dispatch('valid', value + unit);
  } else {
    value = defaultValue;
    unit = defaultUnit;
  }
</script>

<!-- === COMPONENT === -->
<div class="input-css-size">
  <p>{description}:</p>
  <div class="inputs">
    <input type="number" bind:value on:focus={() => (active = true)} style:width={inputWidth} />
    <select bind:value={unit} on:click={() => (active = true)}>
      {#each validUnits as cssUnit}
        <option value={cssUnit}>{cssUnit}</option>
      {/each}
    </select>
  </div>
</div>

<!-- === STYLE === -->
<style>
  .input-css-size {
    display: flex;
    margin: 0.75rem 0;
    align-items: center;
  }

  p {
    margin-right: 0.5rem;
  }

  input {
    padding: 0.15rem 0 0.15rem 0.5rem;
  }
  select {
    padding: 0.15rem 0.5rem;
  }
</style>
