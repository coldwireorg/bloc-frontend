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
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={size} height={size} on:click>
		{#if icon == 'file'}
			<path
				fill="white"
				fill-opacity="1"
				d="M2.5 0C1.67157 0 1 0.671573 1 1.5V14.5C1 15.3284 1.67157 16 2.5 16H12.5C13.3284 16 14 15.3284 14 14.5V4.5C14 3.67157 13.3284 3 12.5 3C11.6716 3 11 3.67157 11 4.5L11 13H4L4 3H8C8.82843 3 9.5 2.32843 9.5 1.5C9.5 0.671573 8.82843 0 8 0H2.5Z"
			/>
		{:else if icon == 'text'}
			<path
				fill="white"
				fill-opacity="1"
				d="M0 1.5C0 0.671573 0.671573 0 1.5 0H14.5C15.3284 0 16 0.671573 16 1.5C16 2.32843 15.3284 3 14.5 3H1.5C0.671573 3 0 2.32843 0 1.5Z"
			/>
			<path
				fill="white"
				fill-opacity="1"
				d="M0 8C0 7.17157 0.671573 6.5 1.5 6.5H14.5C15.3284 6.5 16 7.17157 16 8C16 8.82843 15.3284 9.5 14.5 9.5H1.5C0.671573 9.5 0 8.82843 0 8Z"
			/>
			<path
				fill="white"
				fill-opacity="1"
				d="M0 14.5C0 13.6716 0.671573 13 1.5 13H10.5C11.3284 13 12 13.6716 12 14.5C12 15.3284 11.3284 16 10.5 16H1.5C0.671573 16 0 15.3284 0 14.5Z"
			/>
		{:else if icon == 'table'}
			<path
				fill="white"
				fill-opacity="1"
				d="M3.5 14.5C3.5 15.3284 4.17157 16 5 16C5.82843 16 6.5 15.3284 6.5 14.5L6.5 6.5H14.5C15.3284 6.5 16 5.82843 16 5C16 4.17157 15.3284 3.5 14.5 3.5H6.5V1.5C6.5 0.671573 5.82843 0 5 0C4.17157 0 3.5 0.671573 3.5 1.5V3.5H1.5C0.671573 3.5 0 4.17157 0 5C0 5.82843 0.671573 6.5 1.5 6.5H3.5L3.5 14.5Z"
			/>
		{:else if icon == 'image'}
			<path
				d="M5.5 8.89231C6.32843 8.89231 7 8.23107 7 7.41539C7 6.5997 6.32843 5.93846 5.5 5.93846C4.67157 5.93846 4 6.5997 4 7.41539C4 8.23107 4.67157 8.89231 5.5 8.89231Z"
				fill="#F0F6FC"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M0 13.3231C0 14.1388 0.671573 14.8 1.5 14.8H14.5C15.3284 14.8 16 14.1388 16 13.3231L16 3.47692C16 3.37496 15.9895 3.27542 15.9695 3.17927C15.8297 2.50626 15.2249 2 14.5 2H1.5C0.878679 2 0.34559 2.37195 0.117877 2.90204C0.0419733 3.07874 0 3.273 0 3.47692V13.3231ZM3 4.95385L3 11.8462H5.37931C5.43176 11.7701 5.49221 11.6978 5.56066 11.6304L10.2809 6.98281C10.8667 6.40603 11.8164 6.40603 12.4022 6.98281C12.988 7.55958 12.988 8.49472 12.4022 9.07149L9.58421 11.8462L13 11.8462L13 4.95385L3 4.95385Z"
				fill="#F0F6FC"
			/>
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
	}
</style>
