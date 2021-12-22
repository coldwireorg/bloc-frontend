<script>
	import User from './User.svelte';

	export let users = [];
	export let border;
</script>

<div class="user-list">
	{#if users.length <= 3}
		{#each users.slice(0, 3) as user}
			<User username={user} shared={true} {border} />
		{/each}
	{:else}
		<User
			background="var(--complementary-white-25)"
			username={users.length - 2}
			shared={true}
			{border}
		/>
		{#each users.slice(0, 2) as user}
			<User username={user} shared={true} {border} />
		{/each}
	{/if}
</div>

<style>
	.user-list {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex-direction: row-reverse;
	}
</style>
