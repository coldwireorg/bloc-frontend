<script>
	import { request } from '@lib/Api';

	import { contextmenu } from '@stores/contextmenu';
	import { folders } from '@stores/folders';
  import { path } from '@stores/path';

	import Menu from '@components/Menus/Menu.svelte';
	import MenuOption from '@components/Menus/MenuOption.svelte';
	import MenuSeparator from '@components/Menus/MenuSeparator.svelte';

	import IconFolderFill from '@icons/IconFolderFill.svelte';
  import IconUpload from '@lib/Icons/IconUpload.svelte';
</script>

{#if $contextmenu.open == 'newFolder'}
  <Menu open={true} x={$contextmenu.x - 148} y={$contextmenu.y}>
    <MenuOption>
      <IconFolderFill color="#F0F6FC40" opacity="0.75" width="16px" height="16px" /> New folder
    </MenuOption>
    <MenuOption>
      <IconUpload color="#F0F6FC40" opacity="0.75" width="16px" height="16px" /> Upload
    </MenuOption>
  </Menu>
{/if}