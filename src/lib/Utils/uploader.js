import { files } from '@stores/files';
import { loaders } from '@stores/loaders';
import { notifications } from '@stores/notifications';
import { quota } from '@stores/quota';

export function upload(file, path) {
	const fd = new FormData();
	fd.append('file', file); // adding file to the request
	fd.append('path', path);

	// create notification
	const loaderId = loaders.create(0, 0);
	notifications.create(0, 'loader', { filename: file.name.slice(0, 12) }, loaderId);

	function delNotif() {
		setTimeout(() => {
			notifications.del(loaderId);
		}, 2000);
	}

	// Create request
	let xhr = new XMLHttpRequest();
	xhr.responseType = 'text';
	xhr.open('POST', `${import.meta.env.VITE_API_BASE}/file/`);

	xhr.upload.addEventListener('progress', ({ loaded, total }) => {
		let percent = Math.floor((loaded / total) * 100);
		loaders.add(loaderId, percent);
	});

	xhr.onload = () => {
		if (xhr.readyState === xhr.DONE) {
			if (xhr.status === 200) {
				let res = JSON.parse(xhr.responseText);

				files.add(res.data.file);

				quota.set({
					max: res.data.quota.max,
					total: res.data.quota.total
				});

				localStorage.setItem('quotaMax', res.data.quota.max),
					localStorage.setItem('quotaTotal', res.data.quota.total);
			} else {
				delNotif();
			}
		} else {
			delNotif();
		}

		delNotif();
	};

	xhr.send(fd);
}
