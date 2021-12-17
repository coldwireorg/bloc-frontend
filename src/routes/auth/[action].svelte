<script context="module">
  export async function load({ page }) {
		return {
      props: {
        action: page.params.action,
      }
		}
	}
</script>

<script>
  import LL from '$lib/i18n/i18n-svelte'

  import TextField from '$lib/components/TextField.svelte'
  import Button from '$lib/components/Button.svelte'

  let err
  export let action

  let username
  let password
  let repassword

</script>

<div class="auth-form">
  <form class="form" onsubmit="return false">
    <img src="/img/logo-full.svg" alt="BLOC">
    {#if err}
      <div class="error">
        <p>{err}</p>
      </div>
    {/if}
    <TextField bind:value={username} type="text" placeholder={$LL.AUTH_FIELD_USERNAME()} />
    <TextField bind:value={password} type="password" placeholder={$LL.AUTH_FIELD_PASSWORD()} />
    {#if action == 'register'}
      <TextField bind:value={repassword} type="password" placeholder={$LL.AUTH_FIELD_PASSWORD()} />
    {/if}
    <div class="submit">
      <Button on:click={() => alert('test')} on:submit={() => alert('test')}>{action == 'login' ? $LL.AUTH_BUTTON_LOGIN():$LL.AUTH_BUTTON_REGISTER()}</Button>
      <p>{action == 'login' ? $LL.AUTH_TEXT_CREATE_ACCOUNT() : $LL.AUTH_TEXT_ALREADY_HAVE_ACCOUNT()} <a sveltekit:prefetch href={action == 'login'?'/auth/register':'/auth/login'}>{action == 'login' ? $LL.AUTH_TEXT_CREATE_ACCOUNT() : $LL.AUTH_TEXT_LOGIN()}</a>!</p>  
    </div>
 </form>
</div>

<style>
  .auth-form {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .auth-form .form {
    max-width: 25%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .auth-form .form img {
    width: 100%;
    margin-bottom: 15px;
    user-select: none;
  }

  .auth-form .form .submit {
    display: flex;
    flex-direction: column;
    gap: 0px;
  }

  .auth-form .form .submit p {
    color: var(--complementary-white-50);
    display: block;
    margin-top: 15px;
    font-size: 12px;
  }

  .auth-form .form a {
    text-decoration: none;
    color: var(--primary-blue);
    cursor: pointer;
  }

  .auth-form .form .error {
    background-color: var(--secondary-red);
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 12px;
    padding: 8px 16px;
  }

  @media only screen and (max-width: 1000px) {
    .auth-form .form {
      max-width: 50%;
    }
  }

  @media only screen and (max-width: 900px) {
    .auth-form {
      width: 100%;
      right: 0;
    }

    .auth-form .form {
      max-width: 70%;
    }
  }
</style>