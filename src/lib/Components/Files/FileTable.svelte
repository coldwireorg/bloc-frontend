<script>
	import { contextmenu } from '@stores/contextmenu';
	import IconDropMenu from '@icons/IconDropMenu.svelte';

	export let rows;
	export let data;
</script>

<div class="table-scroll">
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
				<tr on:contextmenu|preventDefault={(e) => contextmenu.open(e, d)}>
					{#each Object.entries(rows) as r}
						{#if Object.keys(d).includes(r[0])}
							<td>
								<div class="inner">
									<slot
										fileId={d.fileId}
										accessId={d.accessId}
										favorite={d.favorite}
										value={d[r[0]]}
										row={r[0]}
									/>
								</div></td
							>
						{:else}
							<td>—</td>
						{/if}
					{/each}
					<td on:click={(e) => contextmenu.open(e, d)}>
						<div class="inner">
							<IconDropMenu size="16px" />
						</div>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.table-scroll {
		width: 100%;
		overflow-x: auto;
	}

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

	table td .inner {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	@media (max-width: 800px) {
		table {
			width: 600px;
		}
	}
</style>
