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
  import { notifications } from '$lib/stores/notifications';

	import Nav from './_nav.svelte';
	import TopBar from './_topBar.svelte';
	import Contextmenu from './_contextmenu.svelte';

  import Notification from '$lib/components/Notifications/Notification.svelte';

  notifications.subscribe(console.log)

  notifications.create(5000, {})
</script>

<Contextmenu />
<div class="notifications">
  {#each $notifications as notification}
    <Notification id={notification.id} data={notification.data} />
  {/each}
</div>

<Nav />
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

  .notifications {
    position: fixed;
    left: 40%;
    right: calc(40% - 200px);
    pointer-events: none;
    direction: revert;
    flex-direction: column-reverse;
    display: flex;
    top: 50px;
    bottom: 50px;
  }

	@media only screen and (max-width: 1080px) {
		.content {
			left: 0;
		}
	}
</style>
