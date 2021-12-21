export const bitsToSize = (size) => {
	let fileSize;

	let fileTotal = Math.floor(size / 1000);

	if (fileTotal < 1024) {
		fileSize = fileTotal + ' KB';
	} else if (fileTotal < 1024 * 1024) {
		fileSize = (size / (1024 * 1024)).toFixed(2) + ' MB';
	} else {
		fileSize = (size / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
	}

	return fileSize;
};

export const dateTodate = (date) => {
	const seconds = Math.floor((new Date() - new Date(date)) / 1000);

	let interval = seconds / 31536000;
	if (interval > 1) {
		return Math.floor(interval) + ' years ago';
	}

	interval = seconds / 2592000;
	if (interval > 1) {
		return Math.floor(interval) + ' months ago';
	}

	interval = seconds / 604800;
	if (interval > 1) {
		return Math.floor(interval) + ' weeks ago';
	}

	interval = seconds / 86400;
	if (interval > 1) {
		return Math.floor(interval) + ' days ago';
	}

	interval = seconds / 3600;
	if (interval > 1) {
		return Math.floor(interval) + ' hours ago';
	}

	interval = seconds / 60;
	if (interval > 1) {
		return Math.floor(interval) + ' minutes ago';
	}

	return 'Uploaded recently';
};

export const getFileExtension = (filename) => {
	if (filename) {
		const reg = filename.match(/\.[0-9a-z]+$/i);
		if (reg != null || reg != undefined) {
			return reg[0];
		} else {
			return 'Unknow';
		}
	}
	{
		return '.error';
	}
};
