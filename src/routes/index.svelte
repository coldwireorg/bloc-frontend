<script context="module">
	export async function load({ session }) {
		console.log(session.user);

		if (session.user) {
			return { redirect: '/app/files', status: 302 };
		} else {
			return { redirect: '/auth/login', status: 302 };
		}
	}
</script>
