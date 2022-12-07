<!-- === TYPESCRIPT === -->
<script lang="ts">
  import { SvgCarrot } from '@mcisne4/svelte-lib/svg';
  import { CodeBlock, CodeBlockFile } from '@mcisne4/svelte-lib/components';
  import {
    ComponentPage,
    Content_Syntax,
    Content_Attributes,
    Content_Playground,
    Content_Code,
  } from '$lib/components/component-page';
  import { InputColor, InputNumber, InputCssSize, InputCssRotation } from '$lib/components/inputs';
  import { lib_path } from '$store/lib-info';
  import type { PageData } from './$types';

  // --- INFO --- //
  const componentName = 'SvgCarrot';
  const codeImport = `import { ${componentName} } from "${lib_path}/svg";`;
  const codeSyntax = `<${componentName} style:string="" />`;
  const codeExample = `<script>
    ${codeImport}
<${'/'}script>


<div style="--svg-fill: red;">
    <${componentName}
        style={${'`'}
            margin: 2rem;
            --svg-height: 3.4rem;
        ${'`'}}
    />
</div>
`;
  const attr_cssDefault = `--svg-fill: #000;        | SVG fill color
--svg-stroke: #000;      | SVG stroke color
--svg-stroke-width: 20;  | SVG stroke width
--svg-height: 1rem;      | SVG height
--svg-rotate: 0deg;      | SVG rotation`;

  // --- CSS PROPS --- //
  let svgProps: {
    svgFill?: string;
    svgStroke?: string;
    svgStrokeWidth?: string;
    svgHeight?: string;
    svgRotate?: string;
  } = {};

  $: style = Object.entries(svgProps)
    .map(([key, value]) => {
      key = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      return `--${key}:${value};`;
    })
    .join('');

  // --- Component Code --- //
  export let data: PageData;
</script>

<!-- === HEAD === -->
<svelte:head>
  <title>{componentName} • Svelte Component Library</title>
</svelte:head>

<!-- === COMPONENT === -->
<header><h1>SvgCarrot</h1></header>

<ComponentPage initialTabHeight="13rem" initialComponentHeight="12rem" initialTab={1}>
  <div class="svg-component">
    <SvgCarrot {style} />
  </div>

  <Content_Syntax slot="syntax" {codeImport} {codeSyntax} {codeExample} />

  <Content_Attributes slot="attributes">
    <div class="attributes">
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
        </strong> attribute or inherited from parent elements. If no CSS variable values are found, the
        fallback values are applied.
      </p>
      <CodeBlock code={attr_cssDefault} margin="0.5rem 0 0" description="CSS Variable Fallbacks" />
    </div>
  </Content_Attributes>

  <Content_Playground slot="playground">
    <h2>Attribute: <em>style</em></h2>

    <InputColor
      defaultValue="none"
      description="--svg-fill"
      on:valid={(e) => (svgProps.svgFill = e.detail)}
    />
    <InputColor
      defaultValue="#ff00ff"
      description="--svg-stroke"
      on:valid={(e) => (svgProps.svgStroke = e.detail)}
    />
    <InputNumber
      defaultValue={80}
      description="--svg-stroke-width"
      inputWidth="5rem"
      on:valid={(e) => (svgProps.svgStrokeWidth = e.detail)}
    />
    <InputCssSize
      defaultValue={10}
      defaultUnit="rem"
      description="--svg-height"
      inputWidth="4rem"
      on:valid={(e) => (svgProps.svgHeight = e.detail)}
    />
    <InputCssRotation
      defaultValue={0}
      defaultUnit="deg"
      description="--svg-rotate"
      inputWidth="4rem"
      on:valid={(e) => (svgProps.svgRotate = e.detail)}
    />
  </Content_Playground>

  <Content_Code slot="code" filename="SvgCarrot.svelte" code={data.code} />
</ComponentPage>

<!-- === STYLE === -->
<style>
  .svg-component {
    --svg-height: 10rem;
    --svg-fill: #f5f;
    --svg-stroke: #f0f;
    --svg-fill: none;
  }
</style>
