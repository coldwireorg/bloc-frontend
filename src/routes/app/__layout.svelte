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
	import { contextmenu } from '$lib/stores/contextmenu';

	import Nav from './_nav.svelte';
	import TopBar from './_topBar.svelte';
	import Contextmenu from './_contextmenu.svelte';
</script>

<Nav />
<Contextmenu />

<div class="content" on:click={() => contextmenu.close()}>
	<TopBar />
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

	@media only screen and (max-width: 1080px) {
		.content {
			left: 0;
		}
	}
</style>
