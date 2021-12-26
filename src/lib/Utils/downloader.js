import { loaders } from '@stores/loaders';
import { notifications } from '@stores/notifications';

export function download(id, name) {
	// create notification
	const loaderId = loaders.create(0, 0);
	notifications.create(0, 'loader', { filename: name }, loaderId);

	fetch(`${import.meta.env.VITE_API_BASE}/file/download`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			accessId: id
		})
	})
		.then((res) => res.blob())
		.then((blob) => {
			loaders.add(loaderId, 100);
			let f = window.URL.createObjectURL(blob);
			let tempDl = document.createElement('a');
			tempDl.style = 'display:none';
			tempDl.href = f;
			tempDl.download = name;
			tempDl.click();
			window.URL.revokeObjectURL(blob);

			setTimeout(() => {
				notifications.del(loaderId);
				setTimeout(() => {
					loaders.del(loaderId);
				}, 1000);
			}, 1000);
		});
}
