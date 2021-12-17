<script>
	export let width = '60%';
	export let height = '10px';
	export let progress = 0;
	export let barColor = 'var(--complementary-white-25)';
	export let inColor = 'var(--complementary-white)';
</script>

<div class="progress-bar" style="width: {width}; height:{height}; background-color: {barColor};">
	<span
		class="progress-bar-fill"
		style="width: {progress}%; height:{height}; background-color: {inColor};"
	/>
</div>

<style>
	.progress-bar {
		width: 60%;
		background-color: white;
		border-radius: 8px;
		height: 10px;
	}

	.progress-bar-fill {
		display: block;
		height: 10px;
		background-color: var(--color-green);
		border-radius: 8px;
		transition: width 500ms ease-in-out;
	}
</style>
