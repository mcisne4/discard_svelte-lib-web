<!-- === TYPESCRIPT === -->
<script lang="ts">
  import { InputColor } from '$lib/components/inputs';
  import { CodeBlock, CodeBlockFile } from '@mcisne4/svelte-lib/components';

  // --- PROPS --- //
  export let componentName: string;
  export let codeImport: string; // TAB: Syntax
  export let codeSyntax: string; // TAB: Syntax
  export let codeExample: string; // TAB: Syntax
  export let code: string; // TAB: Code

  // --- DISPLAY NAME --- //
  let displayName = componentName;
  if (displayName.toLowerCase().startsWith('svg')) {
    displayName = displayName.slice(3);
  }
  displayName = displayName
    .replace(/_/g, ' ')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([a-z])([0-9])/g, '$1 $2')
    .replace(/([0-9])([a-z])/g, '$1 $2')
    .trim();

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

<!-- --- HEADING --- -->
<header>
  <h1><strong>{displayName}</strong> <em>( {componentName} )</em></h1>
</header>

<!-- --- COMPONENT --- -->
<div class="component-container" style:background-color={componentBg}>
  <slot />
</div>

<!-- --- TABS --- -->
<div class="tab-container">
  <TabRow {tabs} style="transition: all 0.4s;" tabStyle="transition: all 0.4s;" />
  <div class="tab-content">
    {#if activeTab === 1}
      <!-- ___ TAB: Syntax ___ -->
      <div class="tab-content-container">
        <div>
          <h2><strong>Import</strong></h2>
          <CodeBlock code={codeImport} description="Component Import" />

          <h2><strong>Syntax</strong></h2>
          <CodeBlock code={codeSyntax} description="Usage Syntax" />

          <h2><strong>Example</strong></h2>
          <CodeBlockFile code={codeExample} filename="SomeComponent.svelte" margin="0.5rem 0 0" />
        </div>
      </div>
      <slot name="syntax" />
    {:else if activeTab === 2}
      <!-- ___ TAB: Attributes ___ -->
      <div class="tab-content-container">
        <slot name="attributes" />
      </div>
    {:else if activeTab === 3}
      <!-- ___ TAB: Playground ___ -->
      <h2>Component Container</h2>
      <InputColor
        defaultValue="none"
        description="Background Color"
        on:valid={(e) => (componentBg = e.detail)}
      />
      <slot name="playground" />
    {:else}
      <!-- ___ TAB: Code ___ -->
      <div class="tab-content-container">
        <div>
          <CodeBlockFile {code} filename={componentName} margin="0.75rem 0 0" />
        </div>
      </div>
      <slot name="code" />
    {/if}
  </div>
</div>

<!-- === STYLE === -->
<style lang="scss">
  header h1 {
    margin: 1rem 0 0.5rem;

    & strong {
      color: var(--body-fg-highlight);
      font-size: 2rem;
    }

    & em {
      font-size: 1.75rem;
    }
  }
  .component-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: 1rem;
    min-height: 30vh;
  }

  .tab {
    &-container {
      display: flex;
      flex-direction: column;
      flex-basis: 16rem;
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

  :global(.tab-content-container > div > h2) {
    display: flex;
    gap: 0.4rem;
    transition: color 1s;
    margin: 1rem 0 0.5rem;
  }
  :global(.tab-content-container > div > h2:first-child) {
    margin-top: 0;
  }
  :global(.tab-content-container > div > h2 em) {
    color: var(--body-fg-highlight);
    transition: color 1s;
  }
  :global(.tab-content-container > div > h2 strong) {
    color: var(--body-fg-highlight);
    transition: color 1s;
  }
  :global(.tab-content-container > div > h3) {
    margin: 1rem 0 0.5rem;
  }
  :global(.tab-content-container > div > p) {
    margin: 0.5rem 0;
    line-height: 1.75;
  }
</style>
