<script>
	export let color = '';
	export let link = '#';
	export let target = '';
	export let style;
</script>

<a
	style={(color != '' ? 'background-color:' + color + ';' : '') + style}
	href={link}
	{target}
	on:submit
	on:click
	class="btn"><slot /></a
>

<style>
	.btn {
		height: 32px;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;

		padding: 0px 8px;
		font-size: 12px;
		font-weight: 600;

		background-color: var(--primary-blue);
		border-radius: 8px;
		border: none;

		color: var(--complementary-white);

		cursor: pointer;

		transition: 0.3s;
	}

	.btn:hover {
		opacity: 0.9;
	}
</style>
