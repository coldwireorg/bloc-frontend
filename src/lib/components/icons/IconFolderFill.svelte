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
  <path fill={color} fill-opacity={opacity} d="M6.66671 2.66663H2.66671C1.92671 2.66663 1.33337 3.25996 1.33337 3.99996V12C1.33337 12.3536 1.47385 12.6927 1.7239 12.9428C1.97395 13.1928 2.31309 13.3333 2.66671 13.3333H13.3334C13.687 13.3333 14.0261 13.1928 14.2762 12.9428C14.5262 12.6927 14.6667 12.3536 14.6667 12V5.33329C14.6667 4.59329 14.0667 3.99996 13.3334 3.99996H8.00004L6.66671 2.66663Z"/>
</svg>
