import { writable, derived } from 'svelte/store';

const createFilesStore = () => {
  const files = writable([])
  const { subscribe, set, update } = files

  function add(file) {
    update(state => {
      return [...state, file]
    })
  }

  function rem(accessId) {
    update(state => {
      return state.filter(f => f['accessId'] != accessId)
    })
  }

  return {
    subscribe,
    set,
    add,
    rem
  }
}

export const files = createFilesStore()
export const favorites = derived(files, $files => $files.filter((f) => f.favorite))
