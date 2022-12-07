<!-- === TYPESCRIPT === -->
<script lang="ts">
  import { CodeBlock, CodeBlockFile } from '@mcisne4/svelte-lib/components';

  export let codeImport: string;
  export let codeSyntax: string;
  export let codeExample: string;
</script>

<!-- === COMPONENT === -->
<h2>Import</h2>
<CodeBlock code={codeImport} description="Import Statement" />

<h2>Syntax</h2>
<CodeBlock code={codeSyntax} description="Component Syntax" />

<h2>Example</h2>
<CodeBlockFile code={codeExample} filename={'SomeComponent.svelte'} margin="0" />

<!-- === STYLE === -->
<style>
  h2 {
    margin: 1rem 0 0.5rem;
    color: var(--body-fg-highlight);
  }
  h2:first-child {
    margin-top: 0;
  }
</style>
