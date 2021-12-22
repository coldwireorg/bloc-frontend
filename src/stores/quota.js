import { writable } from 'svelte/store';

export const quota = writable({
	max: 0,
	total: 0
});
