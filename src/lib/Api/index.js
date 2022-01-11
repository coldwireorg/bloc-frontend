import { goto } from '$app/navigation';
import { routes } from './routes';

export async function request(route, req = {}) {
	console.log(route, req);
	const res = await fetch(
		`${import.meta.env.VITE_API_BASE}/${routes[route].route}${req.query ? '?' + req.query : ''}`,
		{
			method: routes[route].method,
			headers: routes[route].headers,
			body: req.body ? JSON.stringify(req.body) : null
		}
	);

  if (res.status === 403) {
    goto("/auth/login")
    return false
  }

	return res.json();
}
