<!-- === TYPESCRIPT === -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  // --- Props --- //
  export let defaultValue: number;
  export let description: string;
  export let validate: (current: number) => boolean = (current: number) => true;
  export let inputWidth = 'auto';

  // --- On Value Change --- //
  let value: number;
  let active = false;

  $: if (active) {
    if (validate(value)) dispatch('valid', value);
  } else {
    value = defaultValue;
  }
</script>

<!-- === COMPONENT === -->
<div class="input-number">
  <p class="description">{description}:</p>
  <input type="number" bind:value on:focus={() => (active = true)} style:width={inputWidth} />
</div>

<!-- === STYLE === -->
<style>
  .input-number {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    margin: 0.75rem 0;
  }
  input {
    padding: 0.15rem 0 0.15rem 0.5rem;
  }
</style>
