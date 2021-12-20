<script context="module">
	export async function load({ session }) {
		if (!session.user && !session.authenticated) {
			return { redirect: '/auth/login', status: 302 };
		} else {
			return {};
		}
	}
</script>

<script>
	import { browser } from '$app/env';

	import { contextmenu } from '$lib/stores/contextmenu';
	import { notifications } from '$lib/stores/notifications';
	import { session } from '$app/stores';

	import Nav from './_nav.svelte';
	import TopBar from './_topBar.svelte';
	import Contextmenu from './_contextmenu.svelte';

	import Notification from '$lib/components/Notifications/Notification.svelte';
	import NotificationLoading from '$lib/components/Notifications/NotificationLoading.svelte';

	if (browser) {
		$session.quota = {
			max: localStorage.getItem('quotaMax'),
			total: localStorage.getItem('quotaTotal')
		};
	}

	// test
	notifications.subscribe(console.log);
	notifications.create(0, {});
</script>

<Contextmenu />
<div class="notifications">
	{#each $notifications as notification}
		<Notification id={notification.id} data={notification.data}>
			<NotificationLoading text="Uploading file.jpg..." progress="20" />
		</Notification>
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
		position: absolute;
		top: 0;
		bottom: 32px;
		height: auto;
		right: 64px;
		width: 256px;
		pointer-events: none;
		flex-direction: column-reverse;
		display: flex;
	}

	@media only screen and (max-width: 1080px) {
		.content {
			left: 0;
		}
	}
</style>
