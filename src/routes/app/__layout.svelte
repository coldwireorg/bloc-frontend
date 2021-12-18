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
	import Contextmenu from './_contextmenu.svelte';

	let ctxIsOpen = false;
	let ctxX = 0;
	let ctxY = 0;

  function onMessage(event) {
    
  }
</script>

<Nav />

<div class="content">
	<TopBar />
	<Contextmenu open={ctxIsOpen} x={ctxX} y={ctxY} />
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
