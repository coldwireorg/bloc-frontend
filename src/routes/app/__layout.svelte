<script>
	import Nav from './_nav.svelte';
</script>

<Nav />

<div class="content">
  <slot />
</div>

<style>
  .content {
    position: absolute;
    top: 0; bottom: 0;
    left: 264px; right: 0;

    padding: 32px;
  }
</style>