import { writable } from 'svelte/store';

const createContextMenuStore = () => {
  let value = {
    open: false,
    file: {},
    x: 0,
    y: 0
  }

  const { subscribe, set } = writable(value)

  function open(e, file) {
    setTimeout(() => {
      set({
        open: true,
        file: file,
        x: e.clientX,
        y: e.clientY
      })
    }, 200)
  }

  function close() {
    set(value)
  }

  return {
    subscribe,
    set,
    open,
    close
  }
}

export const contextmenu = createContextMenuStore()