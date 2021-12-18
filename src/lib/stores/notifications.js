
import { writable } from 'svelte/store'
import { randomId } from '$lib/utils/generators'

const createNotificationsStore = () => {
  const notifications = writable([])
  const { subscribe, update } = notifications

  const create = (timeout, data) => {
    let id = randomId()
    console.log(id)

    update(state => {
      return [...state, {
        id: id,
        data: data
      }]
    })

    if (timeout != 0) {
      setTimeout(() => del(id), timeout)
    }
  }

  const del = (id) => {
    console.log(id)
		update(state => {
			let arr = state;
      let index = arr.findIndex((n) => n.id === id)
			arr.splice(index, 1)
			return arr;
		});
  }

  return {
    subscribe,
    create,
    del
  }
}

export const notifications = createNotificationsStore()