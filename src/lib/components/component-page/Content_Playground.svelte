<!-- === TYPESCRIPT === -->

<!-- === COMPONENT === -->
<div class="tab-content-playground">
  <slot />
</div>

<!-- === STYLE === -->
<style>
  :global(.tab-content-playground h2) {
    display: flex;
    gap: 0.5rem;
    margin: 1rem 0 0.5rem;
  }
  /* :global(.tab-content-playground h2:first-child) {
    margin-top: 0;
  } */
  :global(.tab-content-playground h2 em) {
    color: var(--body-fg-highlight);
  }
</style>
