<script context="module">
	export async function load({ page }) {
		let path = page.query.get('path');

		if (!path) {
			path = '/';
		}

		return {
			props: {
				queryPath: path
			}
		};
	}
</script>

<script>
	import { browser } from '$app/env';
	import { request } from '@lib/Api';

	import { files } from '@stores/files';
	import { folders } from '@stores/folders';
	import { notifications } from '@stores/notifications';
	import { contextmenu } from '@stores/contextmenu';
	import { quota as quotaStore } from '@stores/quota';
	import { path } from '@stores/path';

	import Navbar from '@templates/Navbar.svelte';
	import TopBar from '@templates/Topbar.svelte';
	import FilesMenu from '@templates/FilesMenu.svelte';

	import Notification from '@components/Notifications/Notification.svelte';

	export let queryPath;
	$path = queryPath;

	async function init() {
		const filesList = await request('listFiles', {
			query: `path=${$path}`
		});
		if ((filesList.code = 'SUCCESS' && filesList.data && filesList.data.files)) {
			$files = filesList.data.files;
		} else {
			$files = [];
		}

		const foldersList = await request('listFolders', {
			query: `path=${$path}`
		});

		if ((foldersList.code = 'SUCCESS' && foldersList.data && foldersList.data.folders)) {
			$folders = foldersList.data.folders;
		} else {
			$folders = [
				{
					name: '..',
					path: '/'
				}
			];
		}
	}

	async function qta() {
		const quota = await request('getQuota', {
			query: undefined,
			body: undefined
		});

		$quotaStore = {
			max: quota.data.quota.max,
			total: quota.data.quota.total
		};
	}

	if (browser) {
		qta();
    path.subscribe((p) => {
      init();
    });
	}
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
