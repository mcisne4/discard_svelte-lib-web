<!-- === TYPESCRIPT === -->
<script lang="ts">
  import { CodeBlockFile } from '@mcisne4/svelte-lib/components';

  export let code: string;
  export let filename: string;
</script>

<!-- === COMPONENT === -->
<div class="tab-content-code">
  <CodeBlockFile {code} {filename} margin="0.5rem 0 1rem" />
  <slot />
</div>
