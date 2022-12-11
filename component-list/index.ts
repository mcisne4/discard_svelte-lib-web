// === IMPORTS === //
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { dirname } from 'path';
import axios from 'axios';

// === MAIN === //
async function main() {
  console.log('\nFetching Svelte Components from GitHub: @mcisne4/svelte-lib');

  // --- Get Component List --- //
  console.log('  Getting component list');
  const component_list = await getComponentList();
  console.log('  Components Found:', component_list.length);

  // --- Copy Svelte Components --- //
  const codeDir = 'src/routes';

  await Promise.all(
    component_list.map((path) => {
      return fetchWriteFile(path, codeDir);
    }),
  );

  console.log(`  Successfully copied the components to:\n    "${codeDir}"\n`);
}
main();

// === HELPER FUNCTIONS === ///

// --- FUNCTION: getComponentList() --- //
function getComponentList(): Promise<string[]> {
  const url = 'https://raw.githubusercontent.com/mcisne4/svelte-lib/main/component-list/list.json';

  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

// --- FUNCTION: fetchWriteFile() --- //
function fetchWriteFile(path: string, destination: string): Promise<boolean> {
  return new Promise(async (resolve, reject) => {
    // ___ Variables ___ //
    const url = 'https://raw.githubusercontent.com/mcisne4/svelte-lib/main/' + path;
    const filename = path.replace('src/lib', destination).replace('.svelte', '/code.txt');
    const folder = dirname(filename);

    // ___ Fetch Data ___ //
    const data = await axios
      .get(url)
      .then((res) => res.data)
      .catch((err) => reject(err));

    // ___ Make Directory ___ //
    if (!existsSync(folder)) {
      mkdirSync(folder, { recursive: true });
    }

    // ___ Write File ___ //
    try {
      writeFileSync(filename, data);
    } catch (error) {
      reject(error);
    }

    // ___ Resolve ___ //
    resolve(true);
  });
}
