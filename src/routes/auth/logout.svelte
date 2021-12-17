<script context="module">
  export async function load({ session }) {
    session.user = {}
    session.quota = {}

    return {
      status: 302,
      redirect: '/auth/login'
    }
  }
</script>