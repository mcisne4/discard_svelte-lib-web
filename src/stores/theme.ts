import { writable, type Writable } from 'svelte/store';

const initial: 'light' | 'dark' = 'dark';

export const theme: Writable<'dark' | 'light'> = writable(initial);
