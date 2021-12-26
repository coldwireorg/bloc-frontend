export const routes = {
	// User auth
	register: {
		route: 'user/auth/register',
		method: 'POST',
		headers: { 'Content-Type': 'application/json' }
	},
	login: {
		route: 'user/auth/login',
		method: 'POST',
		headers: { 'Content-Type': 'application/json' }
	},
	logout: {
		route: 'user/auth/logout',
		method: 'GET',
		headers: {}
	},
	getQuota: {
		route: 'user/quota',
		method: 'GET',
		headers: {}
	},

	// Files
	uploadFile: {
		route: 'file',
		method: 'POST',
		headers: {}
	},
	deleteFile: {
		route: 'file',
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' }
	},
	downloadFile: {
		route: 'file/download',
		method: 'GET',
		headers: {}
	},
	listFiles: {
		route: 'file',
		method: 'GET',
		headers: {}
	},

  // Favorites
  updateFavorite: {
		route: 'favorite',
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' }
	},

	// Shares
	createShare: {
		route: 'share',
		method: 'POST',
		headers: { 'Content-Type': 'application/json' }
	},
	revokeShare: {
		route: 'file',
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' }
	},
	listShares: {
		route: 'file',
		method: 'GET',
		headers: {}
	}
};
