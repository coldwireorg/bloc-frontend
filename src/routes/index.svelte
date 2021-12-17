<script context="module">
	export async function load({ session }) {
		if (session.user) {
			return { redirect: '/app/files', status: 302 };
		} else {
			return { redirect: '/auth/login', status: 302 };
		}
	}
</script>
