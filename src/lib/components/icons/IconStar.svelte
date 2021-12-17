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
		d="M7.99998 10.26L5.49331 11.7733L6.15331 8.92001L3.93998 7.00001L6.85998 6.75334L7.99998 4.06001L9.13998 6.75334L12.06 7.00001L9.84665 8.92001L10.5066 11.7733L7.99998 10.26ZM14.6666 6.16001L9.87331 5.75334L7.99998 1.33334L6.12665 5.75334L1.33331 6.16001L4.96665 9.31334L3.87998 14L7.99998 11.5133L12.12 14L11.0266 9.31334L14.6666 6.16001Z"
	/>
</svg>
