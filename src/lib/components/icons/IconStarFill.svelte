<script>
  export let size = '1em'
  export let color = '#F0F6FC40'
  export let opacity = '1'
  let customClass = ''
  export { customClass as class }
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 16 16"
  width={size}
  height={size}
  class="{customClass}"
  {...$$restProps}
  on:click
>
  <path fill={color} fill-opacity={opacity} d="M8 11.5133L12.12 14L11.0267 9.31334L14.6667 6.16001L9.87333 5.74668L8 1.33334L6.12666 5.74668L1.33333 6.16001L4.96666 9.31334L3.88 14L8 11.5133Z" />
</svg>
