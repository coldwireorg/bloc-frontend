<script context="module">
  import { initI18n } from '$lib/i18n/i18n-svelte';

  export async function load({ session }) {
    // detect locale of user (see https://github.com/ivanhofer/typesafe-i18n#locale-detection)
    const locale = 'en'
    await initI18n(locale)

    session.user = {
      username: 'monoko'
    }

		if (session.user.username != 'monoko') {
			return { redirect: '/app/files', status: 302 };
		} else {
      return { redirect: '/auth/login', status: 302 };
    }
  }
</script>
