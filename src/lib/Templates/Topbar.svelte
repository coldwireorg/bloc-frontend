<script>
	import LL from '@lib/Translations/i18n-svelte';

	import { page } from '$app/stores';

	import Button from '@components/Button.svelte';
	import TextField from '@components/TextField.svelte';
	import IconUpload from '@icons/IconUpload.svelte';

	import { upload } from '@utils/uploader';

	let file, fileinput;
	const onFileSelected = (e) => {
		upload(e.target.files[0]);
	};
</script>

<div class="top-bar">
	<div class="left">
		{#if $page.path === '/app/files'}
			<h1>{$LL.APP_NAV_LINK_FILES()}</h1>
		{:else if $page.path === '/app/files/favorites'}
			<h1>{$LL.APP_NAV_LINK_FAVORITES()}</h1>
		{:else if $page.path === '/app/files/shared'}
			<h1>{$LL.APP_NAV_LINK_SHARED()}</h1>
		{:else if $page.path === '/app/settings'}
			<h1>Settings</h1>
		{/if}
	</div>
	<div class="right">
		{#if $page.path != '/app/settings'}
			<TextField placeholder={LL.APP_FIELD_SEARCH_BAR()} />
			<Button on:click={() => fileinput.click()}
				>{LL.APP_BUTTON_UPLOAD()}
				<IconUpload size="18px" color="var(--complementary-white)" /></Button
			>
			<input
				bind:value={file}
				type="file"
				id="fileupload"
				style="display:none;"
				on:change={(e) => onFileSelected(e)}
				bind:this={fileinput}
			/>
		{/if}
	</div>
</div>

<style>
	.top-bar {
		width: 100%;
		height: 32px;
		margin-bottom: 50px;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.top-bar .right,
	.left {
		display: flex;
		align-items: center;
		flex-direction: row;
		gap: 16px;
	}
</style>
