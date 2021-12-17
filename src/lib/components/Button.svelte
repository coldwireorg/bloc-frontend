<script>
	export let color = '';
</script>

<button
	style={color != '' ? 'background-color:' + color + ';' : ''}
	href="#"
	on:submit
	on:click
	class="btn"><slot /></button
>

<style>
	.btn {
		height: 32px;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;

		padding: 0 16px 0 16px;
		font-size: 12px;

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
