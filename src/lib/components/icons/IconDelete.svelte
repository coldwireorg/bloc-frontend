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
  <path fill={color} fill-opacity={opacity} d="M4.00004 12.6667C4.00004 13.0203 4.14052 13.3594 4.39056 13.6095C4.64061 13.8595 4.97975 14 5.33337 14H10.6667C11.0203 14 11.3595 13.8595 11.6095 13.6095C11.8596 13.3594 12 13.0203 12 12.6667V4.66667H4.00004V12.6667ZM5.33337 6H10.6667V12.6667H5.33337V6ZM10.3334 2.66667L9.66671 2H6.33337L5.66671 2.66667H3.33337V4H12.6667V2.66667H10.3334Z" />
</svg>
