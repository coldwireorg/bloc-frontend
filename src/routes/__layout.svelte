<script context="module">
	import { initI18n } from '$lib/i18n/i18n-svelte';

	export async function load({ session }) {
		const locale = 'se';
		await initI18n(locale);

    session.user = {
		  username: 'monoko',
		};

		session.quota = {
      total: 2000000,
			max: 10000000
    };

    return {};
  }
</script>

<slot/>