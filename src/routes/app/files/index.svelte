<script>
	import LL from '$lib/i18n/i18n-svelte';
	import { bitsToSize, dateTodate } from '$lib/utils/converters';

	import FileTable from '$lib/components/Files/FileTable.svelte';
	import FavoriteCard from '$lib/components/Favorites/FavoriteCard.svelte';

	import FileIcon from '$lib/components/Files/FileIcon.svelte';
	import UserList from '$lib/components/Users/UserList.svelte';
	import IconStarFill from '$lib/components/icons/IconStarFill.svelte';

	const rows = {
		fileName: $LL.APP_TABLE_FILE_NAME(),
		fileSize: $LL.APP_TABLE_FILE_SIZE(),
		lastEdit: $LL.APP_TABLE_FILE_LASTEDIT(),
		sharedTo: $LL.APP_TABLE_FILE_SHARED_WITH()
	};

	export let files = [
		{
			accessId: 'aaaaa',
			fileName: 'file.jpg',
			fileSize: 125,
			lastEdit: Date.now(),
			sharedTo: ['monoko', 'patate', 'carotte'],
			favorite: true
		}
	];

	export let contextmenu;
	export let contextmenux;
	export let contextmenuy;

	function toggleCtxMenu(e) {
		contextmenu = !contextmenu;
		contextmenux = e.clientX;
		contextmenuy = e.clientY;
	}

	let favorites = files.filter((f) => f.favorite);
</script>

{#if favorites.length > 0}
	<section>
		<h2>Favorites</h2>
		<div class="favorite-list">
			{#each favorites as favorite}
				<FavoriteCard
					fileName={favorite.fileName}
					lastEdit={dateTodate(favorite.lastEdit)}
					shared={favorite.sharedTo}
					on:click={(e) => toggleCtxMenu(e)}
				/>
			{/each}
		</div>
	</section>
{/if}

<section>
	<h2>Files</h2>
	<FileTable {rows} data={files} let:value let:row let:favorite>
		{#if row === 'fileName'}
			<FileIcon fileName={value} />
			{value}
			{#if favorite}
				<IconStarFill color="var(--complementary-white-25)" size="18px" />
			{/if}
		{:else if row === 'fileSize'}
			{bitsToSize(value)}
		{:else if row === 'lastEdit'}
			{dateTodate(value)}
		{:else if row === 'sharedTo'}
			<UserList users={value} />
		{:else}
			{value}
		{/if}
	</FileTable>
</section>

<style>
	section {
		margin-top: 32px;
	}
	.favorite-list {
		display: inline-flex;
		width: calc(100% + 32px);

		flex-wrap: nowrap;
		flex-direction: row;

		justify-content: start;
		align-items: center;
		gap: 30px;

		overflow-x: auto;
		scrollbar-width: none;

		border-top-left-radius: 8px;
		border-bottom-left-radius: 8px;
	}

	.favorite-list::-webkit-scrollbar {
		display: none;
	}
</style>
