<script>
	import { parseFile } from '@utils/fileTypes';

	export let fileName = 'file.jpg';
	export let size = '12px';

	let icon = 'file';
	let color = 'gray';

	let res = parseFile(fileName);
	if (res != undefined) {
		icon = res.icon;
		color = res.color;
	}
</script>

<i class="icon" style="background-color: var(--secondary-{color});">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} on:click>
		{#if icon == 'file'}
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C4.34315 0 3 1.34315 3 3V29C3 30.6569 4.34315 32 6 32H26C27.6569 32 29 30.6569 29 29V9C29 7.34315 27.6569 6 26 6C24.3431 6 23 7.34315 23 9L23 26H9L9 6H17C18.6569 6 20 4.65685 20 3C20 1.34315 18.6569 0 17 0H6Z" fill="#F0F6FC"/>
		{:else if icon == 'text'}
      <rect width="32" height="6" rx="3" fill="#F0F6FC"/>
      <rect y="13" width="32" height="6" rx="3" fill="#F0F6FC"/>
      <rect y="26" width="24" height="6" rx="3" fill="#F0F6FC"/>
		{:else if icon == 'table'}
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7 29C7 30.6569 8.34315 32 10 32C11.6569 32 13 30.6569 13 29L13 13H29C30.6569 13 32 11.6569 32 10C32 8.34315 30.6569 7 29 7H13V3C13 1.34315 11.6569 0 10 0C8.34315 0 7 1.34315 7 3V7H3C1.34315 7 0 8.34315 0 10C0 11.6569 1.34315 13 3 13H7L7 29Z" fill="#F0F6FC"/>
		{:else if icon == 'image'}
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 26C0 27.6569 1.34315 29 3 29H29C30.6569 29 32 27.6569 32 26L32 6.00342V6C32 5.79289 31.979 5.59069 31.939 5.3954C31.6593 4.02835 30.4497 3 29 3L3.00394 3L3 3C1.75736 3 0.691179 3.75552 0.235755 4.83227C0.0839466 5.19118 0 5.58579 0 6V26ZM6 9.00001L6 23H10.7586C10.8635 22.8456 10.9844 22.6987 11.1213 22.5618L20.5618 13.1213C21.7334 11.9498 23.6329 11.9498 24.8045 13.1213C25.976 14.2929 25.976 16.1924 24.8045 17.364L19.1684 23L26 23L26 9L6 9.00001ZM11 17C12.6569 17 14 15.6569 14 14C14 12.3431 12.6569 11 11 11C9.34315 11 8 12.3431 8 14C8 15.6569 9.34315 17 11 17Z" fill="#F0F6FC"/>
    {:else if icon === 'music'}
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26Z" fill="#F0F6FC"/>
      <rect x="19" y="19" width="6" height="6" rx="3" transform="rotate(180 19 19)" fill="#F0F6FC"/>
    {:else if icon === 'video'}
      <path fill-rule="evenodd" clip-rule="evenodd" d="M32 6.00342L32 26C32 26.1036 31.9948 26.2059 31.9845 26.3067C31.8309 27.8195 30.5533 29 29 29H3C1.34315 29 0 27.6569 0 26V6C0 4.55026 1.02835 3.34069 2.39539 3.06095C2.59069 3.02099 2.79289 3 3 3L29 3C30.6569 3 32 4.34315 32 6C32 6.00114 32 6.00228 32 6.00342ZM6 9L6 23L26 23L26 9L6 9Z" fill="#F0F6FC"/>
      <path d="M20.5 16.866C21.1667 16.4811 21.1667 15.5189 20.5 15.134L14.5 11.6699C13.8333 11.285 13 11.7661 13 12.5359L13 19.4641C13 20.2339 13.8333 20.715 14.5 20.3301L20.5 16.866Z" fill="#F0F6FC"/>
		{/if}
	</svg>
</i>

<style>
	.icon {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 20px;
		height: 20px;
		border-radius: 4px;

    box-sizing: border-box;
	}
</style>
