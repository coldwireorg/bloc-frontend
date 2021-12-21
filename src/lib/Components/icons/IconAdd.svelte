<script>
	export let size = '1em';
	export let color = '#F0F6FC';
	export let opacity = '1';
	let customClass = '';
	export { customClass as class };
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 10 10"
	width={size}
	height={size}
	class={customClass}
	{...$$restProps}
	on:click
>
	<path
		fill={color}
		fill-opacity={opacity}
		d="M7.91671 5.41668H5.41671V7.91668H4.58337V5.41668H2.08337V4.58334H4.58337V2.08334H5.41671V4.58334H7.91671V5.41668Z"
	/>
</svg>
