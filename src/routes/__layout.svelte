<script context="module">
	import { initI18n } from '@lib/Translations/i18n-svelte';

	export async function load() {
		const locale = 'se';
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
    .then(res => res.json())
    .then(data => {
      if (data.code == 'ERROR_TOKEN') {
        if (!$page.path.startsWith('/auth') || $page.path == '/auth') {
          goto('/auth/login')
        }
      } else {
        console.log($page.path)
        if (!$page.path.startsWith('/files') || $page.path == '/files') {
          goto('/app/files')
        }
      }
    })
  }
</script>

<slot />