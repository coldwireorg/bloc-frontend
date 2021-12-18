<script>
	import LL from '$lib/i18n/i18n-svelte';
	import { bitsToSize, dateTodate } from '$lib/utils/converters';

	import FileTable from '$lib/components/Files/FileTable.svelte';
	import FileIcon from '$lib/components/Files/FileIcon.svelte';

	import IconStarFill from '$lib/components/icons/IconStarFill.svelte';
	import User from '$lib/components/Users/User.svelte';

	const rows = {
		fileName: $LL.APP_TABLE_FILE_NAME(),
		fileSize: $LL.APP_TABLE_FILE_SIZE(),
		lastEdit: $LL.APP_TABLE_FILE_LASTEDIT(),
		sharedBy: 'Shared by'
	};

	export let shared = [
		{
			accessId: 'aaaaa',
			fileName: 'file.jpg',
			fileSize: 125,
			lastEdit: Date.now(),
			sharedTo: ['monoko', 'patate', 'carotte'],
			sharedBy: 'michel',
			favorite: true
		}
	];
</script>

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
		<User username={value} size="24" /> michel
	{:else}
		{value}
	{/if}
</FileTable>
