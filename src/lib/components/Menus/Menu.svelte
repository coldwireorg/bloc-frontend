<script>
	export let x = 0;
	export let y = 0;
	export let open = false;
	export let title;
</script>

{#if open}
	<div class="menu" style="top: {y}px; left: {x}px">
		{#if title}
			<div class="title">
				<span>{title}</span>
			</div>
		{/if}
		<slot />
	</div>
{/if}

<style>
	.menu {
		position: absolute;
		width: 148px;
		background-color: var(--secondary-gray-3);
		border: 1px solid var(--secondary-white-5);
		border-radius: 8px;
		padding: 8px 0;

		display: flex;
		flex-direction: column;

		z-index: 1000;
	}

	.menu .title {
		width: 100%;
		height: 32px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		transition-duration: 0.3s;
	}

	.menu .title span {
		width: 100%;
		margin-left: 16px;
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 10px;
		color: var(--secondary-white-25);
	}
</style>
