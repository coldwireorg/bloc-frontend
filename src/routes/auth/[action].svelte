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
	import { request } from '@lib/Api';

	import { session } from '$app/stores';
	import LL from '@lib/Translations/i18n-svelte';

	import TextField from '@lib/Components/TextField.svelte';
	import PasswordField from '@lib/Components/PasswordField.svelte';
	import Button from '@lib/Components/Button.svelte';
	import { goto } from '$app/navigation';
	import IconLock from '@lib/Icons/IconLock.svelte';

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
			body: {
				username: username,
				password: password
			}
		});

		switch (json.code) {
			case 'SUCCESS':
				$session.user = { username: json.data.username };
				goto('/app/files/');
				break;
			case 'ERROR_AUTH_EXIST':
				err = 'User already exist';
				break;
			case 'ERROR_AUTH_PASSWORD':
				err = 'Wrong password';
				break;
			default:
				err = 'unknown error...';
		}
	}
</script>

<div class="auth-form">
	<form class="form" on:submit|preventDefault={() => auth()}>
		<div class="top">
			<IconLock size="16px" color="var(--primary-green)" /> Make sure your connection is safe
		</div>
		<h1>{action.charAt(0).toUpperCase() + action.slice(1)}</h1>
		{#if err}
			<div class="error">
				<p>{err}</p>
			</div>
		{/if}
		<TextField bind bind:value={username} placeholder={$LL.AUTH_FIELD_USERNAME()} />
		<PasswordField bind:value={password} placeholder={$LL.AUTH_FIELD_PASSWORD()} />
		{#if action == 'register'}
			<PasswordField bind:value={repassword} placeholder={$LL.AUTH_FIELD_PASSWORD()} />
		{/if}
		<div class="submit">
			<input
				class="btn"
				type="submit"
				on:click={() => auth(username, password)}
				value={action == 'login' ? $LL.AUTH_BUTTON_LOGIN() : $LL.AUTH_BUTTON_REGISTER()}
			/>
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
		width: 224px;
		display: flex;
		flex-direction: column;
		gap: 16px;

		background-color: var(--complementary-gray-3);
		padding: 32px;
		border-radius: 8px;
	}

	.auth-form .form .top {
		width: auto;
		height: 48px;
		background-color: var(--primary-green-25);

		display: flex;
		align-items: center;
		justify-content: space-around;

		color: var(--primary-green);
		font-size: 10px;

		margin: -32px;
		margin-bottom: 0px;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;

		padding-left: 32px;
		padding-right: 32px;
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
		font-size: 10px;
	}

	.auth-form .form a {
		color: var(--complementary-gray);
		text-decoration: underline;
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

	.btn {
		height: 32px;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;

		padding: 0px 8px;
		font-size: 12px;
		font-weight: 600;

		background-color: var(--primary-blue);
		border-radius: 8px;
		border: none;

		color: var(--complementary-white);

		cursor: pointer;

		transition: 0.3s;
	}

	.btn:hover {
		opacity: 0.9;
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
