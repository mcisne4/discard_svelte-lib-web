import type { PageServerLoad } from './$types';
import { getTxtFile } from '$lib/api/getTxtFile';
import { join } from 'path';

const currentDir = join(new URL('', import.meta.url).pathname, '..');

export const load: PageServerLoad = async () => {
  const data = await Promise.all([
    getTxtFile(join(currentDir, 'cssFallbacks.txt')),
    getTxtFile(join(currentDir, 'code.txt')),
  ]).then((results) => {
    return {
      cssFallbacks: results[0],
      code: results[1],
      componentName: 'SvgCodePage',
    };
  });

  return data;
};
