<script>
	import LL from '$lib/i18n/i18n-svelte';
	import Table from '$lib/components/Table.svelte';

	const rows = {
		fileName: $LL.APP_TABLE_FILE_NAME(),
		fileSize: $LL.APP_TABLE_FILE_SIZE(),
		lastEdit: $LL.APP_TABLE_FILE_LASTEDIT(),
		sharedTo: $LL.APP_TABLE_FILE_SHARED_WITH()
	};

	export let files = [
		{
			fileName: 'file.txt',
			fileSize: 125,
			accessState: 'PRIVATE',
			favorite: true
		}
	];
</script>

<Table {rows} data={files} />
