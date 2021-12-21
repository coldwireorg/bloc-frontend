import { session } from '$app/stores';
import { files } from "@lib/stores/files"
import { loaders } from "@lib/stores/loaders"
import { notifications } from "@lib/stores/notifications"

export function upload(file) {
  const fd = new FormData()
  fd.append('file', file) // adding file to the request

  const loaderId = loaders.create(0, 0)
  notifications.create(0, 'loader', {}, loaderId)

  let xhr = new XMLHttpRequest()
  xhr.responseType = 'text'
  xhr.open("POST", `${import.meta.env.VITE_API_BASE}/file/upload/`)

  xhr.upload.addEventListener("progress", ({loaded, total}) => {
    let percent = Math.floor((loaded / total) * 100)
    loaders.add(loaderId, percent)
  })

  xhr.onload = () => {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200) {
        let res = JSON.parse(xhr.responseText)

        files.add(res.data.file)

        session.update(s => {
          let m = s
          m.quota.max = res.quota.max,
          m.quota.total = res.quota.total
        })
        localStorage.setItem('quotaMax', res.quota.max),
        localStorage.setItem('quotaTotal', res.quota.total)
      } else {
        return
      }
    } else {
      return
    }

    loaderId.

    setTimeout(() => {
      notifications.del(loaderId)
      loaders.del(loaderId)
    }, 2000)
  }

  xhr.send(fd)
}