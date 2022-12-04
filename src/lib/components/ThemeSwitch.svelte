<!-- === TYPESCRIPT === -->
<script lang="ts">
  import { SvgMoon, SvgSun } from '@mcisne4/svelte-lib/svg';
  import { theme } from '$store/theme';
</script>

<!-- === COMPONENT === -->
<div class="theme-switch" class:dark={$theme === 'dark'} class:light={$theme === 'light'}>
  <button class="moon" on:click={() => theme.set('dark')}>
    <SvgMoon />
  </button>
  <button class="sun" on:click={() => theme.set('light')}>
    <SvgSun />
  </button>
</div>

<!-- === STYLE === -->
<style lang="scss">
  .theme-switch {
    display: flex;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-style: solid;
    border-radius: 25px;
    gap: 0.4rem;
    padding: 2px;
    border-color: var(--nav-switch-btn-border);
    background-color: var(--nav-switch-btn-bg);
    transition: border-color 1s, background-color 1s;

    &.dark {
      & .moon {
        background-color: var(--nav-switch-btn-bg-active);
        --svg-fill: var(--nav-switch-btn-fg-active);
      }
      & .sun {
        background-color: var(--nav-switch-btn-bg-inactive);
        --svg-fill: var(--nav-switch-btn-fg-inactive);
        --svg-stroke: var(--nav-switch-btn-fg-inactive);
      }
    }
    &.light {
      & .moon {
        background-color: var(--nav-switch-btn-bg-inactive);
        --svg-fill: var(--nav-switch-btn-fg-inactive);
      }
      & .sun {
        background-color: var(--nav-switch-btn-bg-active);
        --svg-fill: var(--nav-switch-btn-fg-active);
        --svg-stroke: var(--nav-switch-btn-fg-active);
      }
    }
  }
  .moon {
    --svg-height: 15px;
  }
  .sun {
    --svg-height: 16px;
    --svg-stroke-width: 40;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 21px;
    width: 21px;
    border: none;
    border-radius: 10.5px;
    cursor: pointer;
    transition: all 0.5s;
  }
</style>
