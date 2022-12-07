<!-- === TYPESCRIPT === -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  // --- Props --- //
  export let defaultValue: string;
  export let description: string;
  export let validate: (current: string) => boolean = (current: string) => true;

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
<div class="input-color">
  <p class="description">{description}:</p>
  <input type="color" bind:value on:click={() => (active = true)} />
  <p class="current"><em>{value}</em></p>
</div>

<!-- === STYLE === -->
<style>
  .input-color {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    margin: 0.75rem 0;
  }
  .description {
    color: var(--body-fg);
    transition: color 1s;
  }

  .current {
    display: flex;
  }
  .current em {
    color: var(--body-fg-dim);
    font-size: 0.9rem;
    transition: color 1s;
  }

  input {
    border: none;
    width: 2rem;
    height: 1.5rem;
  }
</style>
