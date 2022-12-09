// === IMPORTS === //
import type { ComponentType } from 'svelte';
import {
  SvgCarrot,
  SvgCode,
  SvgCodeEdit,
  SvgCodePage,
  SvgHome,
  SvgMoon,
  SvgSun,
} from '@mcisne4/svelte-lib/svg';

// === MAIN === //
export const svgIconsStatic = createComponentList([
  { component: SvgCarrot, name: 'SvgCarrot', style: '--svg-fill: none;' },
  { component: SvgCode, name: 'SvgCode' },
  { component: SvgCodeEdit, name: 'SvgCodeEdit' },
  { component: SvgCodePage, name: 'SvgCodePage' },
  { component: SvgHome, name: 'SvgHome' },
  { component: SvgMoon, name: 'SvgMoon' },
  { component: SvgSun, name: 'SvgSun' },
]);

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
