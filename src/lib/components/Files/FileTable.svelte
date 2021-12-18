<script>
	export let rows;
	export let data;
</script>

<table>
	<thead>
		<tr>
			{#each Object.entries(rows) as [value, title]}
				<th>{title}</th>
			{/each}
		</tr>
	</thead>
	<br />
	<tbody>
		{#each data as d, i}
			<tr>
				{#each Object.entries(rows) as r}
					{#if Object.keys(d).includes(r[0])}
						<td><slot value={d[r[0]]} row={r[0]} /></td>
					{:else}
						<td>—</td>
					{/if}
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		border-collapse: collapse;
		text-align: left;
		width: 100%;
		margin-top: 16px;
	}

	thead {
		border-bottom: 1px solid var(--complementary-white-50);
		color: var(--complementary-white-50);
		font-size: 10px;
	}

	table tbody tr {
		transition-duration: 0.3s;
	}

	table tbody tr:hover {
		background-color: var(--complementary-white-5);
	}

	table td {
		font-size: 12px;
		height: 54px;
	}
</style>
