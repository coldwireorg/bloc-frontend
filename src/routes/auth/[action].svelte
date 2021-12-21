<script context="module">
	export async function load({ page }) {
		return {
			props: {
				action: page.params.action
			}
		};
	}
</script>

<script>
  import { request } from '@lib/Api'

	import { session } from '$app/stores';
	import LL from '@lib/Translations/i18n-svelte';

	import TextField from '@lib/Components/TextField.svelte';
	import PasswordField from '@lib/Components/PasswordField.svelte';
	import Button from '@lib/Components/Button.svelte';
	import { goto } from '$app/navigation';

	export let action;
	let err;

	let username;
	let password;
	let repassword;

	async function auth() {
		if (!username || !password) {
			err = 'Please, input a  valid username and password';
			return;
		}

		if (action == 'register' && password != repassword) {
			err = 'Password does not match!';
			return;
		}

		if (username.length < 3) {
			err = 'Please, enter a valid username!';
			return;
		}

		if (password.length < 8) {
			err = 'Password is too small (8 characters minimum)';
			return;
		}

    const json = await request(action, {
      username: username,
      password: password
    })

		if (json.code === 'ERROR_AUTH_EXIST') {
			err = 'User already exist';
      return
		}

		if (json.code === 'ERROR_AUTH_PASSWORD') {
			err = 'Wrong password';
      return
		}

		if (json.code === 'SUCCESS') {
			$session.user = {
				username: json.data.username
			};

			goto('/app/files/');
		}

    err = 'unknown error...'
	}
</script>

<div class="auth-form">
	<form class="form" on:submit|preventDefault={() => auth()}>
		<img src="/img/logo-full.svg" alt="BLOC" />
		{#if err}
			<div class="error">
				<p>{err}</p>
			</div>
		{/if}
		<TextField bind:value={username} placeholder={$LL.AUTH_FIELD_USERNAME()} />
		<PasswordField bind:value={password} placeholder={$LL.AUTH_FIELD_PASSWORD()} />
		{#if action == 'register'}
			<PasswordField bind:value={repassword} placeholder={$LL.AUTH_FIELD_PASSWORD()} />
		{/if}
		<div class="submit">
			<Button on:click={() => auth(username, password)} on:submit={() => auth(username, password)}
				>{action == 'login' ? $LL.AUTH_BUTTON_LOGIN() : $LL.AUTH_BUTTON_REGISTER()}</Button
			>
			<p>
				{action == 'login' ? $LL.AUTH_TEXT_NO_ACCOUNT() : $LL.AUTH_TEXT_ALREADY_HAVE_ACCOUNT()}
				<a sveltekit:prefetch href={action == 'login' ? '/auth/register' : '/auth/login'}
					>{action == 'login' ? $LL.AUTH_TEXT_CREATE_ACCOUNT() : $LL.AUTH_TEXT_LOGIN()}</a
				>!
			</p>
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
		padding: 0px 16px;
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