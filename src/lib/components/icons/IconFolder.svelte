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
  <path fill={color} fill-opacity={opacity} d="M13.3333 12H2.66665V5.33332H13.3333V12ZM13.3333 3.99999H7.99998L6.66665 2.66666H2.66665C1.92665 2.66666 1.33331 3.25999 1.33331 3.99999V12C1.33331 12.3536 1.47379 12.6927 1.72384 12.9428C1.97389 13.1928 2.31302 13.3333 2.66665 13.3333H13.3333C13.6869 13.3333 14.0261 13.1928 14.2761 12.9428C14.5262 12.6927 14.6666 12.3536 14.6666 12V5.33332C14.6666 4.59332 14.0666 3.99999 13.3333 3.99999Z" />
</svg>
