import { parse } from 'cookie';

const parseJwt = (token) => {
	try {
		return JSON.parse(atob(token.split('.')[1]));
	} catch (e) {
		return null;
	}
};

export async function handle({ request, resolve }) {
	const cookies = parse(request.headers.cookie || '');
	if (cookies.token && cookies.token != '') {
		request.locals.user = {
			username: parseJwt(cookies.token).username
		};
	} else {
		request.locals.user = undefined;
	}

	const response = await resolve(request);

	return {
		...response,
		headers: {
			...response.headers
		}
	};
}

export const getSession = async (request) => {
	return {
		user: request.locals.user
	};
};
