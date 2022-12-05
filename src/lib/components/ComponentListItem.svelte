<!-- === TYPESCRIPT === -->
<script lang="ts">
  import { theme } from '$store/theme';

  export let componentName: string;
  export let displayName: string;
  export let url: string;
  export let width = 'auto';
  export let height = 'auto';
</script>

<!-- === COMPONENT === -->
<a
  class="svg-list-item"
  class:dark={$theme === 'dark'}
  class:light={$theme === 'light'}
  href={url}
  on:mouseenter
  on:mouseleave
  style:width
  style:height
>
  <p class="display-name">{displayName}</p>
  <slot />
  <p class="component-name">{componentName}</p>
</a>

<!-- === STYLE === -->
<style lang="scss">
  .svg-list-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    background-color: var(--component-list-bg);
    border: 1px solid var(--component-list-border);
    border-radius: 0.5rem;
    padding: 0.25rem;
    transition: background-color 0.4s, border 0.4s;

    &:hover {
      background-color: var(--component-list-bg-hover);
      border: 1px solid var(--component-list-border-hover);
      transition: background-color 0.4s, border 0.4s;

      & .display-name {
        color: var(--component-list-fg-hover);
        transition: color 0.4s;
      }
      & .component-name {
        color: var(--component-list-fg-dim-hover);
        transition: color 0.4s;
      }
    }
  }
  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: center;
    transition: color 0.4s;
  }
  .display-name {
    -webkit-line-clamp: 2;
    color: var(--component-list-fg);
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  .component-name {
    -webkit-line-clamp: 1;
    color: var(--component-list-fg-dim);
    margin-top: 0.25rem;
  }
</style>
