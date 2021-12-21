<script>
  import { request } from "@lib/Api";
  import { files } from "@stores/files";

  import Navbar from "@lib/Templates/Navbar.svelte";

  async function init() {
    const filesList = await request('file')
    $files = filesList
  }

</script>

<Navbar/>
<div class="content">

</div>