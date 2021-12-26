<script>
	import LL from '@lib/Translations/i18n-svelte';
	import { bitsToSize, dateTodate } from '@utils/converters';

  import { session } from '$app/stores';
	import { contextmenu } from '@stores/contextmenu';
	import { favorites } from '@stores/files';

	import FileTable from '@components/Files/FileTable.svelte';

	import FileIcon from '@components/Files/FileIcon.svelte';
	import UserList from '@components/Users/UserList.svelte';
	import IconStarFill from '@components/icons/IconStarFill.svelte';

	const rows = {
		fileName: $LL.APP_TABLE_FILE_NAME(),
		fileSize: $LL.APP_TABLE_FILE_SIZE(),
		lastEdit: $LL.APP_TABLE_FILE_LASTEDIT(),
		//sharedTo: $LL.APP_TABLE_FILE_SHARED_WITH()
	};
</script>

{#if $favorites.length > 0}
	<section>
		<h2>Files</h2>
		<FileTable {rows} data={$favorites} let:value let:row let:favorite>
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
{/if}