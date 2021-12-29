<script context="module">
	import { initI18n } from '@lib/Translations/i18n-svelte';

	export async function load() {
		const locale = 'en';
		await initI18n(locale);

		return {};
	}
</script>

<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { browser } from '$app/env';

	if (browser) {
		fetch(`${import.meta.env.VITE_API_BASE}/check`, { method: 'GET' })
			.then((res) => res.json())
			.then((data) => {
				if (data.code == 'ERROR_TOKEN') {
					if (!$page.path.startsWith('/auth') || $page.path == '/auth') {
						goto('/auth/login');
					}
				} else {
					console.log($page.path);
					if (!$page.path.startsWith('/files')) {
						goto('/app/files');
					}
				}
			});
	}
</script>

<slot />

<style>
	:root {
		--primary-green: #009639;
		--primary-green-25: rgba(0, 143, 100, 0.25);
		--primary-green-1: rgba(0, 143, 100, 0.1);
		--primary-blue: #0061ff;
		--primary-blue-25: rgba(0, 97, 255, 0.25);
		--primary-blue-1: rgba(0, 97, 255, 0.1);

		--secondary-brown: #807773;
		--secondary-orange: #d9730d;
		--secondary-yellow: #dfab01;
		--secondary-green: #0f7b6c;
		--secondary-blue: #0b6e99;
		--secondary-violet: #6940a5;
		--secondary-magenta: #ad1a72;
		--secondary-red: #e03e3e;
		--secondary-gray: #9b9a97;

		--complementary-gray-1: #0d1117;
		--complementary-gray-2: #161b22;
		--complementary-gray-3: #30363d;
		--complementary-white-5: rgba(240, 246, 252, 0.05);
		--complementary-white-25: rgba(240, 246, 252, 0.25);
		--complementary-white-50: rgba(240, 246, 252, 0.5);
		--complementary-white: #f0f6fc;
	}
</style>
