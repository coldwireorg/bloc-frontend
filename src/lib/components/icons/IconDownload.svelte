<script>
  export let size = '1em'
  export let color = '#F0F6FC'
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
  <path fill={color} fill-opacity={opacity} d="M8.66671 3.33333V7.33333H9.44671L8.00004 8.78L6.55337 7.33333H7.33337V3.33333H8.66671ZM10 2H6.00004V6H3.33337L8.00004 10.6667L12.6667 6H10V2ZM12.6667 12H3.33337V13.3333H12.6667V12Z"/>
</svg>
