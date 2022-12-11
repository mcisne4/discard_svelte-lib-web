import type { PageServerLoad } from './$types';
import { getTxtFile } from '$lib/api/getTxtFile';
import { join } from 'path';

const currentDir = join(new URL('', import.meta.url).pathname, '..');
const srcDir = currentDir.slice(0, currentDir.indexOf('/routes/'));

export const load: PageServerLoad = async () => {
  const data = await Promise.all([
    getTxtFile(join(currentDir, 'cssFallbacks.txt')),
    getTxtFile(join(srcDir, 'code/lib/svg/SvgCaret.txt')),
  ]).then((results) => {
    return {
      cssFallbacks: results[0],
      code: results[1],
    };
  });

  return data;
};
