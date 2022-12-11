import { lib_path } from '$store/lib-info';

export function createSyntaxProps(componentName: string) {
  return {
    codeImport: `import { ${componentName} } from "${lib_path}/svg";`,
    codeSyntax: `<${componentName} style:string="" />`,
    codeExample: `<script>
    import { ${componentName} } from "${lib_path}/svg";
</script>


<div style="--svg-fill: green;">
    <${componentName}
        style={\`
            --svg-rotate: 30deg;
            background-color: yellowgreen;
        \`}
    />
</div>`,
  };
}
