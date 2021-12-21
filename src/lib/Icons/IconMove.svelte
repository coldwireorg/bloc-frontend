<script>
	export let size = '1em';
	export let color = '#F0F6FC';
	export let opacity = '1';
	let customClass = '';
	export { customClass as class };
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 16 16"
	width={size}
	height={size}
	class={customClass}
	{...$$restProps}
	on:click
>
	<path
		fill={color}
		fill-opacity={opacity}
		d="M2.66659 13.3333L2.66659 9C2.66659 6.60667 4.60659 4.66667 6.99992 4.66667L10.7799 4.66667L8.71992 2.60667L9.66658 1.66667L13.3333 5.33334L9.66659 9L8.72659 8.06L10.7799 6L6.99992 6C5.33325 6 3.99992 7.33334 3.99992 9L3.99992 13.3333L2.66659 13.3333Z"
	/>
</svg>
