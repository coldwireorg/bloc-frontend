import { getFileExtension } from './converters';

const fileTypes = [
	{
		exts: ['.docx', '.doc', '.md', '.txt'],
		color: 'blue',
		icon: 'text'
	},
	{
		exts: ['.iso', '.img'],
		color: 'green',
		icon: 'text'
	},
	{
		exts: ['.pdf', '.pdfx'],
		color: 'red',
		icon: 'file'
	},
	{
		exts: ['.xcl'],
		color: 'green',
		icon: 'table'
	},
	{
		exts: ['.jpg', '.png', '.jpeg'],
		color: 'violet',
		icon: 'image'
	},
	{
		exts: ['.zip', '.bz2', '.tar.gz', '.tar.xz', '.tar'],
		color: 'yellow',
		icon: 'image'
	}
];

export function parseFile(fileName) {
	let ext = getFileExtension(fileName);
	for (let i in fileTypes) {
		if (fileTypes[i].exts.indexOf(ext) >= 0) {
			return fileTypes[i];
		}
	}
}
