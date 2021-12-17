<script>
  export let size = '32px'
  export let color = '#F0F6FC'
  export let opacity = '1'
  let customClass = ''
  export { customClass as class }
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  width={size}
  height={size}
  class="{customClass}"
  {...$$restProps}
  on:click
>
  <path fill={color} fill-opacity={opacity} d="M4 8H28V10.6667H4V8ZM4 14.6667H28V17.3333H4V14.6667ZM4 21.3333H28V24H4V21.3333Z" />
</svg>