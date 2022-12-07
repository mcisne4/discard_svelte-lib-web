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
  const validUnits = ['deg', 'rad', 'turn'];
  if (!validUnits.includes(defaultUnit)) {
    defaultUnit = 'deg';
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
<div class="input-css-rotate">
  <p>{description}:</p>
  <div class="inputs">
    {#if unit === 'deg'}
      <input
        type="number"
        bind:value
        on:focus={() => (active = true)}
        style:width={inputWidth}
        step="1"
      />
    {:else}
      <input
        type="number"
        bind:value
        on:focus={() => (active = true)}
        style:width={inputWidth}
        step="0.1"
      />
    {/if}
    <select bind:value={unit} on:click={() => (active = true)}>
      {#each validUnits as cssUnit}
        <option value={cssUnit}>{cssUnit}</option>
      {/each}
    </select>
  </div>
</div>

<!-- === STYLE === -->
<style>
  .input-css-rotate {
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
