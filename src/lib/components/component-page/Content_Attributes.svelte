<!-- === TYPESCRIPT === -->

<!-- === COMPONENT === -->
<div class="tab-content-attributes">
  <slot />
</div>

<!-- === STYLE === -->
<style>
  :global(.tab-content-attributes h2) {
    display: flex;
    gap: 0.5rem;
    margin: 1rem 0 0.5rem;
  }
  :global(.tab-content-attributes h2:first-child) {
    margin-top: 0;
  }
  :global(.tab-content-attributes h2 em) {
    color: var(--body-fg-highlight);
  }
  :global(.tab-content-attributes p) {
    margin: 0.75rem 0;
    line-height: 1.7;
  }
  :global(.tab-content-attributes h3) {
    margin: 0.5rem 0;
  }
</style>
