import adapter from '@sveltejs/adapter-node';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			resolve: {
				alias: {
					'@lib': path.resolve('./src/lib'),
					'@components': path.resolve('./src/lib/Components'),
					'@templates': path.resolve('./src/lib/Templates'),
					'@icons': path.resolve('./src/lib/Icons'),
					'@utils': path.resolve('./src/lib/Utils'),
					'@stores': path.resolve('./src/stores')
				}
			}
		}
	}
};

export default config;
