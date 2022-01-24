import { writable, derived } from 'svelte/store';

export const path = writable('/');
export const pathView = derived(path, ($path) => $path.split('/').slice(1));
