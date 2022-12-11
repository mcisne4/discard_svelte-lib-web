<!-- === TYPESCRIPT === -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  // --- Props --- //
  export let defaultValue: string;
  export let description: string;
  export let validate: (current: string) => boolean = (current: string) => true;
  export let inputWidth = 'auto';

  // --- On Value Change --- //
  let value: string;
  let active = false;

  $: if (active) {
    if (validate(value)) dispatch('valid', value);
  } else {
    value = defaultValue;
  }
</script>

<!-- === COMPONENT === -->
<div class="input-text">
  <p class="description">{description}:</p>
  <input type="text" bind:value on:focus={() => (active = true)} style:width={inputWidth} />
</div>

<!-- === STYLE === -->
<style>
  .input-text {
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
