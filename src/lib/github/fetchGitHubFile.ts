export async function getGitHubFile(path: string, fetch: Function) {
  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/mcisne4/svelte-lib/main/src/lib${path}`,
    );
    const code = await response.text();
    return code;
  } catch (error) {
    return '';
  }
}
