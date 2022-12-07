import type { PageLoad } from './$types';
import { getGitHubFile } from '$lib/github/fetchGitHubFile';

export const load: PageLoad = async ({ fetch }) => {
  const code = await getGitHubFile('/svg/SvgCarrot.svelte', fetch);

  return {
    code,
  };
};
