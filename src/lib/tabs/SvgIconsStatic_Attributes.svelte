<script lang="ts">
  import { CodeBlock } from '@mcisne4/svelte-lib/components';
  export let cssVariableFallbacks: string;
</script>

<div>
  <h2><em>style</em> :string</h2>
  <p>A CSS styled string</p>
  <p>
    The <strong>style</strong> attribute is applied to the top level SVG element as its
    <strong>style</strong> attribute
  </p>

  <h3>Default Attribute Value</h3>
  <CodeBlock code={`style=""`} margin="0.5rem 0 1rem" description="Default Value" />

  <h3>CSS Variable Fallbacks</h3>
  <p>
    The component looks for a number of CSS variables, which can be passed either through the <strong
    >
      style
    </strong> attribute or inherited from parent elements. If no CSS variable values are found, the fallback
    values are applied.
  </p>
  <CodeBlock code={cssVariableFallbacks} description="CSS Variable Fallbacks" margin="0.5rem 0 0" />
</div>
