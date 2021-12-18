<script>
  import { contextmenu } from '$lib/stores/contextmenu'
  import { files } from '$lib/stores/files'

	import Menu from '$lib/components/Menus/Menu.svelte';
	import MenuOption from '$lib/components/Menus/MenuOption.svelte';
	import MenuSeparator from '$lib/components/Menus/MenuSeparator.svelte';
	import TextField from '$lib/components/TextField.svelte';

	import IconPeoples from '$lib/components/icons/IconPeoples.svelte';
	import IconStar from '$lib/components/icons/IconStar.svelte';
	import IconUnstar from '$lib/components/icons/IconUnstar.svelte';
	import IconDownload from '$lib/components/icons/IconDownload.svelte';
	import IconDelete from '$lib/components/icons/IconDelete.svelte';
	import IconPerson from '$lib/components/icons/IconPerson.svelte';
	import IconFolderFill from '$lib/components/icons/IconFolderFill.svelte';

	let shareSub = false;
	let moveToSub = false;

  contextmenu.subscribe(d => {
    if (!d.open) {
      shareSub = false;
	    moveToSub = false;
    }
  })
</script>

<Menu open={$contextmenu.open} x={$contextmenu.x - 148} y={$contextmenu.y}>
	<!--
  {#if file.$contextmenu.file.accessState == 'PRIVATE'}
    <MenuOption>
      <IconRename color="#F0F6FC40" opacity="0.75" width="16px" height="16px" /> Rename
    </MenuOption>
  {/if} -->
	<MenuOption on:click={() => {}}>
		{#if $contextmenu.file.favorite}
			<IconUnstar color="#F0F6FC40" opacity="0.75" width="16px" height="16px" /> Unstar
		{:else}
			<IconStar color="#F0F6FC40" opacity="0.75" width="16px" height="16px" /> Star
		{/if}
	</MenuOption>
	<!-- <MenuOption on:click={() => {moveToSub = !moveToSub; shareSub = false}}>
    <IconMove color="#F0F6FC40" opacity="0.75" width="16px" height="16px" /> Move to
  </MenuOption> -->
	<MenuSeparator />
	<MenuOption
		on:click={() => {
			shareSub = !shareSub;
			moveToSub = false;
		}}
	>
		<IconPeoples color="#F0F6FC40" opacity="0.75" width="16px" height="16px" /> Share
		{#if $contextmenu.file.sharedTo.length > 0}
			<div class="active blue" />
		{/if}
	</MenuOption>
	<MenuOption on:click={() => {}}>
		<IconDownload color="#F0F6FC40" opacity="0.75" width="16px" height="16px" /> Download
	</MenuOption>
	{#if $contextmenu.file.accessState == 'PRIVATE'}
		<MenuOption on:click={() => files.rem($contextmenu.file.accessId)}>
			<IconDelete color="#F0F6FC40" opacity="0.75" width="16px" height="16px" /> Delete
		</MenuOption>
	{/if}
</Menu>

<Menu open={shareSub} x={$contextmenu.x} y={$contextmenu.y} title="Share with">
	<!-- <MenuOption>
    <IconPlanet color="#F0F6FC40" opacity="0.75" width="16px" height="16px" /> Everyone
  </MenuOption> -->
	<MenuOption
		on:click={() => {}}
		backgroundColor={$contextmenu.file.sharedTo.length > 0 ? 'var(--primary-blue-1)' : ''}
		textColor={$contextmenu.file.sharedTo.length > 0 ? 'var(--primary-blue)' : ''}
	>
		<IconPerson
			color={$contextmenu.file.sharedTo.length > 0 ? 'var(--primary-blue)' : '#F0F6FC40'}
			opacity="0.75"
			width="16px"
			height="16px"
		/> Invited only
	</MenuOption>
</Menu>

<Menu open={moveToSub} x={$contextmenu.x} y={$contextmenu.y} title="Move file to">
	<MenuOption hover={false}>
		<TextField placeholder="search..." />
	</MenuOption>
	<MenuOption>
		<IconFolderFill color="#F0F6FC40" opacity="0.75" width="16px" height="16px" /> Folder one
	</MenuOption>
	<MenuOption>
		<IconFolderFill color="#F0F6FC40" opacity="0.75" width="16px" height="16px" /> Folder two
	</MenuOption>
	<MenuOption>
		<IconFolderFill color="#F0F6FC40" opacity="0.75" width="16px" height="16px" /> Folder three
	</MenuOption>
</Menu>

<style>
	.active {
		width: 6px;
		height: 6px;
		border-radius: 25px;
	}

	.blue {
		background-color: var(--primary-blue);
	}
</style>
