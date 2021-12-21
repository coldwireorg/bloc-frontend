<script>
	export let size = '16px';
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
		d="M12 4L4 12"
		{opacity}
		stroke={color}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M4 4L12 12"
		{opacity}
		stroke={color}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
