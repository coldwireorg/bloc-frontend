<script>
	import { browser } from '$app/env';
	import { request } from '@lib/Api';

	import { files } from '@stores/files';
	import { notifications } from '@stores/notifications';
	import { contextmenu } from '@stores/contextmenu';
	import { quota as quotaStore } from '@stores/quota';

	import Navbar from '@templates/Navbar.svelte';
	import TopBar from '@templates/Topbar.svelte';
	import FilesMenu from '@templates/FilesMenu.svelte';

	import Notification from '@components/Notifications/Notification.svelte';

	async function init() {
		const filesList = await request('listFiles');
		if (filesList.data.files) {
			$files = filesList.data.files;
		}

		const quota = await request('getQuota');
		$quotaStore = {
			max: quota.data.quota.max,
			total: quota.data.quota.total
		};
	}

	if (browser) {
		init();
	}

	notifications.subscribe((d) => console.log(d));
</script>

<FilesMenu />
<div class="notifications">
	{#each $notifications as notification}
		<Notification id={notification.id} data={notification.data} type={notification.type} />
	{/each}
</div>

<Navbar />
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
