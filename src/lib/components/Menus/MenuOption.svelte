<script>
	export let backgroundColor;
	export let textColor;
	export let hover = true;
</script>

<div
	class:menu-item-hover={hover}
	class="menu-item"
	style="{backgroundColor ? 'background-color:' + backgroundColor : ''}; {textColor
		? 'color:' + textColor
		: ''}"
	on:click
>
	<span><slot /></span>
</div>

<style>
	.menu-item {
		width: 100%;
		height: 32px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		transition-duration: 0.3s;
		cursor: pointer;
	}

	.menu-item-hover:hover {
		background-color: var(--complementary-white-5);
	}

	.menu-item span {
		width: 100%;
		margin-left: 16px;
		margin-right: 16px;
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 12px;
	}
</style>
