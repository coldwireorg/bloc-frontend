<script>
	export let size = '1em';
	export let color = '#F0F6FC40';
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
		d="M5.99998 6.66667V10.6667H9.99998V6.66667H12.6666L7.99998 2L3.33331 6.66667H5.99998ZM7.99998 3.86667L9.46665 5.33333H8.66665V9.33333H7.33331V5.33333H6.53331L7.99998 3.86667ZM12.6666 12H3.33331V13.3333H12.6666V12Z"
	/>
</svg>
