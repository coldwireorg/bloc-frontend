import adapter from '@sveltejs/adapter-auto';
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

    vite: {
      resolve: {
        alias: {
          // these are the aliases and paths to them
          '@components': path.resolve('./src/lib/Components'),
          '@lib': path.resolve('./src/lib'),
          '@utils': path.resolve('./src/lib/Utils'),
          '@stores': path.resolve('./src/stores')
        }
      }
    }
	}
};

export default config;
