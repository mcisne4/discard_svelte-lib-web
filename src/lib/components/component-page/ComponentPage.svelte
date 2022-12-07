<!-- === TYPESCRIPT === -->
<script lang="ts">
  import { InputColor } from '$lib/components/inputs';

  // --- PROPS --- //
  export let initialTabHeight = 'auto';
  export let initialComponentHeight = 'auto';

  // --- COMPONENT --- //
  let componentBg = '';

  // --- TABS ---
  import { TabRow } from '@mcisne4/svelte-lib/page';

  export let initialTab = 1;
  let activeTab = initialTab;
  let tabs: { name: string; active: boolean; onClick: () => void }[];
  $: tabs = [
    {
      name: 'Syntax',
      active: activeTab === 1,
      onClick: () => (activeTab = 1),
    },
    {
      name: 'Attributes',
      active: activeTab === 2,
      onClick: () => (activeTab = 2),
    },
    {
      name: 'Playground',
      active: activeTab === 3,
      onClick: () => (activeTab = 3),
    },
    {
      name: 'Code',
      active: activeTab === 4,
      onClick: () => (activeTab = 4),
    },
  ];
</script>

<!-- === COMPONENT === -->
<div
  class="component-container"
  style:background-color={componentBg}
  style:flex-basis={initialComponentHeight}
>
  <slot />
</div>

<div class="tab-container" style:flex-basis={initialTabHeight}>
  <TabRow {tabs} style="transition: all 0.4s;" tabStyle="transition: all 0.4s;" />
  <div class="tab-content">
    {#if activeTab === 1}
      <slot name="syntax" />
    {:else if activeTab === 2}
      <slot name="attributes" />
    {:else if activeTab === 3}
      <h2>Component Container</h2>
      <InputColor
        defaultValue="none"
        description="Background Color"
        on:valid={(e) => (componentBg = e.detail)}
      />
      <slot name="playground" />
    {:else}
      <slot name="code" />
    {/if}
  </div>
</div>

<!-- === STYLE === -->
<style lang="scss">
  .component-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: 1rem;
  }

  .tab {
    &-container {
      display: flex;
      flex-direction: column;
      flex-basis: auto;
      margin: 1rem calc(-1 * var(--padding)) 0;
      flex-grow: 1;
      --tab-width: 7rem;
      --tab-row-indent: var(--padding);
      --tab-row-gap: 3px;
    }

    &-content {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      padding: 1rem var(--padding) var(--padding);
      background-color: var(--tab-area-bg);
    }
  }
</style>
