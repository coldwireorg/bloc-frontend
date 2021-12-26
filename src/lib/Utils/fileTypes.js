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
		icon: 'file'
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
		exts: ['.jpg', '.png', '.jpeg', '.svg'],
		color: 'violet',
		icon: 'image'
	},
	{
		exts: ['.zip', '.bz2', '.tar.gz', '.tar.xz', '.tar'],
		color: 'yellow',
		icon: 'file'
	},
	{
		exts: ['.mp3', '.m4a'],
		color: 'blue',
		icon: 'music'
	},
	{
		exts: ['.mp4', '.avi'],
		color: 'orange',
		icon: 'video'
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
