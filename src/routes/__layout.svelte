<script context="module">
	import { initI18n } from '$lib/i18n/i18n-svelte';

	export async function load() {
		const locale = 'se';
		await initI18n(locale);

		return {};
	}
</script>

<slot />
