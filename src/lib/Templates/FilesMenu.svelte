<script>
	import { request } from '@lib/Api';
	import { download as fileDownload } from '@utils/downloader';

	import { contextmenu } from '@stores/contextmenu';
	import { files } from '@stores/files';
	import { folders } from '@stores/folders';
  import { path } from '@stores/path';

	import Menu from '@components/Menus/Menu.svelte';
	import MenuOption from '@components/Menus/MenuOption.svelte';
	import MenuSeparator from '@components/Menus/MenuSeparator.svelte';
	import TextField from '@components/TextField.svelte';

	//import IconPeoples from '@icons/IconPeoples.svelte';
	import IconStar from '@icons/IconStar.svelte';
	import IconUnstar from '@icons/IconUnstar.svelte';
	import IconDownload from '@icons/IconDownload.svelte';
	import IconDelete from '@icons/IconDelete.svelte';
	import IconPerson from '@icons/IconPerson.svelte';
	import IconFolderFill from '@icons/IconFolderFill.svelte';
  import IconMove from '@lib/Icons/IconMove.svelte';


	let shareSub = false;
	let moveToSub = false;

	contextmenu.subscribe((d) => {
		if (!d.open) {
			shareSub = false;
			moveToSub = false;
		}
	});

	async function deleteFile() {
		let res = await request('deleteFile', {
			body: {
				accessId: $contextmenu.file.accessId,
				fileId: $contextmenu.file.fileId
			}
		});

		if (res.code != 'SUCCESS') {
			console.log(':c');
		} else {
			files.rem($contextmenu.file.accessId);
		}

		contextmenu.close();
	}

	async function updateFavorite() {
		let res = await request('updateFavorite', {
			body: {
				accessId: $contextmenu.file.accessId,
				favorite: !$contextmenu.file.favorite
			}
		});

		if (res.code != 'SUCCESS') {
			console.log(':c');
		} else {
			files.fav($contextmenu.file.accessId, !$contextmenu.file.favorite);
		}

		contextmenu.close();
	}

  async function moveFile(path) {
    console.log(path)

    let res = await request('moveFile', {
      body: {
        accessId: $contextmenu.file.accessId,
        path: path
      }
    });

    if (res.code != 'SUCCESS') {
      console.log('error')
    } else {
      files.rem($contextmenu.file.accessId)
    }
  }

	function download() {
		fileDownload($contextmenu.file.accessId, $contextmenu.file.fileName);
		contextmenu.close();
	}
</script>

{#if $contextmenu.open == 'file'}
  <Menu open={true} x={$contextmenu.x - 148} y={$contextmenu.y}>
    <!--
    {#if file.$contextmenu.file.accessState == 'PRIVATE'}
      <MenuOption>
        <IconRename color="#F0F6FC40" opacity="0.75" width="16px" height="16px" /> Rename
      </MenuOption>
    {/if} -->
    <MenuOption on:click={() => updateFavorite()}>
      {#if $contextmenu.file.favorite}
        <IconUnstar color="#F0F6FC40" opacity="0.75" width="16px" height="16px" /> Unstar
      {:else}
        <IconStar color="#F0F6FC40" opacity="0.75" width="16px" height="16px" /> Star
      {/if}
    </MenuOption>
    <MenuOption on:click={() => {moveToSub = !moveToSub; shareSub = false}}>
      <IconMove color="#F0F6FC40" opacity="0.75" width="16px" height="16px" /> Move to
    </MenuOption>
    <MenuSeparator />
    <!-- <MenuOption
      on:click={() => {
        shareSub = !shareSub;
        moveToSub = false;
      }}
    >
      <IconPeoples color="#F0F6FC40" opacity="0.75" width="16px" height="16px" /> Share
      {#if $contextmenu.file.sharedTo.length > 0}
        <div class="active blue" />
      {/if}
    </MenuOption> -->
    <MenuOption on:click={() => download()}>
      <IconDownload color="#F0F6FC40" opacity="0.75" width="16px" height="16px" /> Download
    </MenuOption>
    {#if $contextmenu.file.accessState == 'PRIVATE'}
      <MenuOption on:click={() => deleteFile()}>
        <IconDelete color="#F0F6FC40" opacity="0.75" width="16px" height="16px" /> Delete
      </MenuOption>
    {/if}
  </Menu>
{/if}
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
	<!-- <MenuOption hover={false}>
		<TextField placeholder="search..." />
	</MenuOption> -->
  {#if $path != '/'}
    <MenuOption on:click={() => moveFile('/')}>
      <IconFolderFill color="#F0F6FC40" opacity="0.75" width="16px" height="16px" /> home
    </MenuOption>
  {/if}
  {#each $folders as folder}
    <MenuOption on:click={() => moveFile(folder.path + folder.name)}>
      <IconFolderFill color="#F0F6FC40" opacity="0.75" width="16px" height="16px" /> {folder.name}
    </MenuOption>
  {/each}
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
