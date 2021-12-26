<script>
  	import { upload } from '@utils/uploader';

    let file, fileinput;
    const onFileSelected = (e) => {
      upload(e.target.files[0]);
    };
</script>

<div class="nofiles">
  <img on:click={() => fileinput.click()} src="/img/cloud.svg" alt="">
  <p>Upload your first file</p>


  <input
    bind:value={file}
    type="file"
    id="fileupload"
    style="display:none;"
    on:change={(e) => onFileSelected(e)}
    bind:this={fileinput}
  />
</div>

<style>
  .nofiles {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 10%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nofiles img {
    width: 80%;
    cursor: pointer;
  }

  .nofiles p {
    color: var(--complementary-white-25);
    font-size: 14px;
  }
</style>