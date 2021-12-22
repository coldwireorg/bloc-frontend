import { routes } from './routes';

export async function request(route, body) {
	const res = await fetch(`${import.meta.env.VITE_API_BASE}/${routes[route].route}`, {
		method: routes[route].method,
		headers: routes[route].headers,
		body: JSON.stringify(body)
	});

	return res.json();
}
