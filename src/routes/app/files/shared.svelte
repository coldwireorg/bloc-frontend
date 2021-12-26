<script>
	import LL from '@lib/Translations/i18n-svelte';
	import { bitsToSize, dateTodate } from '@utils/converters';

	import { files } from '@stores/files';

	import FileTable from '@components/Files/FileTable.svelte';

	import FileIcon from '@components/Files/FileIcon.svelte';
	import User from '@components/Users/User.svelte';
	import IconStarFill from '@icons/IconStarFill.svelte';

	const rows = {
		fileName: $LL.APP_TABLE_FILE_NAME(),
		fileSize: $LL.APP_TABLE_FILE_SIZE(),
		lastEdit: $LL.APP_TABLE_FILE_LASTEDIT(),
		sharedBy: $LL.APP_TABLE_FILE_SHARED_BY()
	};

  let shared = $files.filter(f => f.sharedTo != f.sharedBy)
</script>

{#if shared.length > 0}
	<section>
		<h2>Files</h2>
		<FileTable {rows} data={shared} let:value let:row let:favorite>
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
			{:else if row === 'sharedBy'}
        <User username={value} size="24" /> {value}
			{:else}
				{value}
			{/if}
		</FileTable>
	</section>
{/if}