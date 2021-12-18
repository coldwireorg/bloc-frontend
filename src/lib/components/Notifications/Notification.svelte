<script>
  import { fade } from 'svelte/transition'

  import { notifications } from '$lib/stores/notifications'

  import IconClose from '../icons/IconClose.svelte';

  export let id
</script>

<div class="notif" transition:fade={{ duration:200 }}>
  <div class="content">
    <slot/>
  </div>
  <i on:click={() => notifications.del(id)} class="close"><IconClose size="25px" /></i>
</div>

<style>
  .notif {
    pointer-events:visible;
    width: 100%;
    height: 60px;
    background-color: var(--complementary-gray-3);
    border-radius: 8px;
    margin-top: 15px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .notif i {
    display: inherit;
  }
  .content {
    width: 100%;
  }
</style>