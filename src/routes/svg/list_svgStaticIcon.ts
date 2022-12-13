// === IMPORTS === //
import type { ComponentType } from 'svelte';
import { SvgCaret } from '@mcisne4/svelte-lib/svg';

// === MAIN === //
export let svgIconsStatic2 = [
  {
    component: SvgCaret,
    componentName: 'SvgCaret',
    displayName: 'Caret',
    style: '--svg-fill: none;',
    url: 'svg/SvgCaret',
    hovered: false,
  },
];

export const svgIconsStatic4 = [
  {
    component: SvgCaret,
    componentName: 'SvgCaret',
    displayName: 'Caret',
    url: '/svg',
    hovered: false,
  },
];

// export let svgIconsStatic2 = createComponentList([
//   { component: SvgCaret, name: 'SvgCaret', style: '--svg-fill: none;' },
//   { component: SvgCode, name: 'SvgCode' },
//   { component: SvgCodeEdit, name: 'SvgCodeEdit' },
//   { component: SvgCodePage, name: 'SvgCodePage' },
//   { component: SvgHome, name: 'SvgHome' },
//   { component: SvgMoon, name: 'SvgMoon' },
//   { component: SvgSun, name: 'SvgSun' },
// ]);

// === HELPER FUNCTIONS === //
function createComponentList(
  componentList: {
    component: ComponentType;
    name: string;
    style?: string;
  }[],
) {
  return componentList
    .map(({ component, name, style }) => {
      let displayName = name;
      if (name.toLowerCase().startsWith('svg')) displayName = displayName.slice(3);
      displayName = displayName
        .replace(/_/g, ' ')
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/([a-z])([0-9])/g, '$1 $2')
        .replace(/([0-9])([a-z])/g, '$1 $2')
        .trim();

      return {
        component,
        componentName: name,
        displayName,
        style: style ? style : '',
        url: `svg/${name}`,
        hover: false,
      };
    })
    .sort((a, b) => {
      if (a.displayName > b.displayName) return 1;
      if (a.displayName < b.displayName) return -1;
      return 0;
    });
}
