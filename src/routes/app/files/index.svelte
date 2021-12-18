<script>
	import LL from '$lib/i18n/i18n-svelte';
	import { bitsToSize } from '$lib/utils/converters';

	import FileTable from '$lib/components/Files/FileTable.svelte';

	import FileIcon from '$lib/components/Files/FileIcon.svelte';

	const rows = {
		fileName: $LL.APP_TABLE_FILE_NAME(),
		fileSize: $LL.APP_TABLE_FILE_SIZE(),
		lastEdit: $LL.APP_TABLE_FILE_LASTEDIT(),
		sharedTo: $LL.APP_TABLE_FILE_SHARED_WITH()
	};

	export let files = [
		{
			fileName: 'file.jpg',
			fileSize: 125,
			accessState: 'PRIVATE',
			favorite: true
		}
	];
</script>

<FileTable {rows} data={files} let:value let:row>
	{#if row === 'fileName'}
		<div class="file-name">
			<FileIcon fileName={value} />
			{value}
		</div>
	{:else if row === 'fileSize'}
		{bitsToSize(value)}
	{:else}
		{value}
	{/if}
</FileTable>

<style>
	.file-name {
		display: flex;
		align-items: center;
		gap: 8px;
	}
</style>
