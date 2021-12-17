<script>
  import LL from '$lib/i18n/i18n-svelte'

  import { page } from '$app/stores';

  import Button from "$lib/components/Button.svelte";
  import TextField from "$lib/components/TextField.svelte";
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
      <Button>{LL.APP_BUTTON_UPLOAD()}</Button>
    {/if}
  </div>
</div>

<style>
  .top-bar {
    width: 100%;
    height: 32px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .top-bar .right, .left {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 16px;
  }
</style>