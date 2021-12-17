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
		d="M14.7333 14.3333L1.6 1.1333L0.733337 1.99997L4.6 5.86663L1.33334 6.1333L5 9.3333L3.93334 14L8.06667 11.5333L12.2 14L12 13.2L13.9333 15.1333L14.7333 14.3333ZM10.5333 11.8L8 10.2666L5.46667 11.8L6.13334 8.9333L3.93334 6.99997L5.6 6.86663L10.5333 11.8ZM7.46667 5.3333L6.66667 4.5333L8 1.3333L9.86667 5.7333L14.6667 6.1333L11.2667 9.06663L10.5333 8.3333L12.1333 6.99997L9.2 6.7333L8.06667 4.06663L7.46667 5.3333Z"
	/>
</svg>
