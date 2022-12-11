// === IMPORTS === //
import { error } from '@sveltejs/kit';
import { existsSync, readFileSync, statSync } from 'fs';
import { extname } from 'path';

// === MAIN === //
export function getTxtFile(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // ___ PATH: Invalid Path __ //
    if (!existsSync(path)) {
      throw error(400, `The path does not exist:\n\t${path}`);
    }

    // ___ PATH: Not a File ___ //
    if (!statSync(path).isFile()) {
      throw error(406, `The path is not a file:\n\t${path}`);
    }

    // ___ PATH: Not a '.txt' file ___ //
    if (extname(path) !== '.txt') {
      throw error(415, `The path does not point to an acceptable file type:\n\t${path}`);
    }

    // ___ Read File ___ //
    try {
      const contents = readFileSync(path, 'utf8');
      resolve(contents);
    } catch (err) {
      console.error('getTxtFile() error:');
      console.error(err);
      throw error(500, `Error reading the file:\n\t${path}`);
    }
  });
}
