import { writable } from 'svelte/store';
import { randomId } from '@utils/generators';

const createLoadersStore = () => {
	const { subscribe, update } = writable([]);

	function create(timeout, progress) {
		let id = randomId();

		update((state) => {
			return [
				...state,
				{
					id: id,
					progress: progress
				}
			];
		});

		if (timeout != 0) {
			setTimeout(() => del(id), timeout);
		}

		return id;
	}

	function del(id) {
		update((state) => {
			let arr = state;
			let index = arr.findIndex((n) => n.id === id);
			arr.splice(index, 1);
			return arr;
		});
	}

	function add(id, value) {
		update((state) => {
			let arr = state;
			let index = arr.findIndex((n) => n.id === id);
			arr[index].progress = value;
			return arr;
		});
	}

	return {
		subscribe,
		create,
		del,
		add
	};
};

export const loaders = createLoadersStore();
