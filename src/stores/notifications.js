import { writable } from 'svelte/store';
import { randomId } from '@lib/Utils/generators';

const createNotificationsStore = () => {
	const notifications = writable([]);
	const { subscribe, update } = notifications;

	const create = (timeout, type, data, id) => {

		let nid = id ? id : randomId();
		update((state) => {
			return [
				...state,
				{
					id: nid,
          type: type,
					data: data
				}
			];
		});

		if (timeout != 0) {
			setTimeout(() => del(nid), timeout);
		}

    return id
	};

	const del = (id) => {
		console.log(id);
		update((state) => {
			let arr = state;
			let index = arr.findIndex((n) => n.id === id);
			arr.splice(index, 1);
			return arr;
		});
	};

	return {
		subscribe,
		create,
		del
	};
};

export const notifications = createNotificationsStore();
