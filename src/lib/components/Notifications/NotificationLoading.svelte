<script>
	import ProgressBar from '../ProgressBar.svelte';

	export let id;
	export let text;
	export let progress;
</script>

<div class="loader">
	<p>{text}</p>
	<ProgressBar {progress} height="5px" width="100%" />
</div>

<style>
	.loader {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	p {
		font-size: 12px;
		margin: 0;
	}
</style>
