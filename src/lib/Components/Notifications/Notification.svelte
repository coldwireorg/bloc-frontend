<script>
	import { fade } from 'svelte/transition';

	import { notifications } from '@stores/notifications';
	import { loaders } from '@stores/loaders';

	import IconClose from '@icons/IconClose.svelte';

	import NotificationLoading from './NotificationLoading.svelte';

	export let id;
	export let type;

	let data;

	notifications.subscribe((notif) => {
		let index = notif.findIndex((n) => n.id === id);
		if (index != -1) {
			data = notif[index].data;
		} else {
			data = {};
		}
	});
</script>

<div class="notif" transition:fade={{ duration: 200 }}>
	<div class="content">
		{#if type === 'loader'}
			<NotificationLoading
				text={data.filename ? data.filename : 'undefined'}
				progress={$loaders[$loaders.findIndex((n) => n.id == id)].progress}
			/>
		{/if}
	</div>
	<i on:click={() => notifications.del(id)} class="close"><IconClose /></i>
</div>

<style>
	.notif {
		pointer-events: visible;
		width: 100%;
		height: 46px;
		background-color: var(--complementary-gray-3);
		border-radius: 8px;
		margin-top: 15px;
		padding-left: 20px;
		padding-right: 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 1000;
	}
	.notif i {
		display: inherit;
	}
	.content {
		width: 85%;
	}
</style>
