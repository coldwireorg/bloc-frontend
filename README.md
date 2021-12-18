# Bloc Frontend

This is the repository of the web frontend of the [bloc project](https://github.com/coldwireorg/bloc)

this project is built with the [svelte](https://svelte.dev/) framework using [sveltekit](https://kit.svelte.dev/)

## Running

```bash
# clone repo
git clone https://github.com/coldwireorg/bloc-frontend.git
cd bloc-frontend

# install nodes modules
npm install

# note: update the VITE_API_BASE in .env.development with your backend address
# run dev server
npm run dev
```

## Building

### For NodeJS

```bash
npm run build
```

### For Docker

```bash
docker build -t coldwireorg/bloc-frontend .
```

## License

This project is licensed under the [NPOSL 3.0](https://opensource.org/licenses/NPOSL-3.0) License.<br>
The logo and all associated visuals are under the [CC BY-NC-ND 3.0](https://creativecommons.org/licenses/by-nc-nd/3.0/) License.
