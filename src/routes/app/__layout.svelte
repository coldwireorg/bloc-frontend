<script context="module">
	export async function load({ session }) {
		if (!session.user) {
			return { redirect: '/auth/login', status: 302 };
		} else {
			return {};
		}
	}
</script>

<script>
	import Nav from './_nav.svelte';
  import TopBar from './_topBar.svelte';
</script>

<Nav />

<div class="content">
  <TopBar/>
	<slot />
</div>

<style>
	.content {
		position: absolute;
		top: 0px;
		bottom: 0;
		left: 264px;
		right: 0;

		padding: 32px;
	}
</style>
