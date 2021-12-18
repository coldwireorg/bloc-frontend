<script>
	import { parseFile } from '$lib/utils/fileTypes';

	import FileIcon from '../Files/FileIcon.svelte';
	import IconDropMenu from '../icons/IconDropMenu.svelte';
	import UserList from '$lib/components/Users/UserList.svelte';

	export let fileName;
	export let lastEdit;
	export let shared;

	let color = 'gray';

	let res = parseFile(fileName);
	if (res != undefined) {
		color = res.color;
	}
</script>

<div class="card">
	<div class="up" style="background-color: var(--secondary-{color});">
		<span class="menu" on:click><IconDropMenu size="16px" /></span>
	</div>
	<div class="infos">
		<div class="metadatas">
			<span class="name"><FileIcon {fileName} /> {fileName}</span>
			<span class="edited">{lastEdit}</span>
		</div>
		<UserList users={shared} border="var(--complementary-gray-3)" />
	</div>
</div>

<style>
	.card {
		width: 320px;
		height: 192px;
		background-color: var(--complementary-gray-3);
		border-radius: 8px;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex-shrink: 0;
	}

	.up {
		width: 100%;
		height: 90px;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;

		display: flex;
		overflow: hidden;

		align-items: flex-start;
		justify-content: flex-end;
	}

	.up span {
		color: var(--complementary-white-50);
		font-size: 100px;
		user-select: none;
	}

	.up .menu {
		display: flex;
		margin: 8px;
	}

	.infos {
		padding: 0 16px 16px 16px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 8px;
		margin-right: 8px;
	}

	.infos span {
		font-size: 12px;
	}

	.infos .metadatas {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 6px;
	}

	.infos .metadatas .name {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.infos .metadatas .edited {
		color: var(--complementary-white-25);
	}

	@media only screen and (max-width: 810px) {
		.card {
			width: 200px;
		}
	}
</style>
