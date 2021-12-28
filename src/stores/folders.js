import { writable } from 'svelte/store';

const createFoldersStore = () => {
	const folders = writable([
    {
      name: "test",
      path: "/test"
    }
  ]);
	const { subscribe, set, update } = folders;

	function add(folder) {
		update((state) => {
			return [...state, folder];
		});
	}

	function rem(path) {
		update((state) => {
			return state.filter((f) => f['path'] != path);
		});
	}

	return {
		subscribe,
		set,
		add,
		rem
	};
};

export const folders = createFoldersStore();