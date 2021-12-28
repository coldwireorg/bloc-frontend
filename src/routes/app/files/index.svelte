<script>
	import LL from '@lib/Translations/i18n-svelte';
	import { bitsToSize, dateTodate } from '@utils/converters';

	import { contextmenu } from '@stores/contextmenu';
	import { files, favorites } from '@stores/files';
	import { folders } from '@stores/folders';

	import FileTable from '@components/Files/FileTable.svelte';
	import FavoriteCard from '@components/Favorites/FavoriteCard.svelte';

	import FileIcon from '@components/Files/FileIcon.svelte';
	import IconStarFill from '@icons/IconStarFill.svelte';

	import NoFiles from '@templates/NoFiles.svelte';

	const rows = {
		fileName: $LL.APP_TABLE_FILE_NAME(),
		fileSize: $LL.APP_TABLE_FILE_SIZE(),
		lastEdit: $LL.APP_TABLE_FILE_LASTEDIT()
		//sharedTo: $LL.APP_TABLE_FILE_SHARED_WITH()
	};
</script>

{#if $favorites.length > 0}
	<section>
		<h2>Favorites</h2>
		<div class="favorite-list">
			{#each $favorites as favorite}
				<FavoriteCard
					fileName={favorite.fileName}
					lastEdit={dateTodate(favorite.lastEdit)}
					shared={favorite.sharedTo}
					on:click={(e) => contextmenu.open(e, favorite)}
				/>
			{/each}
		</div>
	</section>
{/if}

{#if $files.length > 0}
	<section>
		<h2>Files</h2>
		<FileTable {rows} folders={$folders} data={$files} let:value let:row let:favorite>
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
				<!-- {:else if row === 'sharedTo'}
        {#if value != $session.user.username}
				  <UserList users={value} />
        {/if} -->
			{:else}
				{value}
			{/if}
		</FileTable>
	</section>
{:else}
	<NoFiles />
{/if}

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
