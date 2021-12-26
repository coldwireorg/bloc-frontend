<script>
	import LL from '@lib/Translations/i18n-svelte';

	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';
	import { quota } from '@stores/quota';
	import { files } from '@stores/files';

	import { bitsToSize } from '@utils/converters';
  import { request } from '@lib/Api';

	import IconFolder from '@icons/IconFolder.svelte';
	import IconStar from '@icons/IconStar.svelte';
	import IconPeoples from '@icons/IconPeoples.svelte';
	import IconHeart from '@icons/IconHeart.svelte';
	import IconExit from '@icons/IconExit.svelte';
	import IconMenu from '@icons/IconMenu.svelte';

	import User from '@components/Users/User.svelte';
	import ProgressBar from '@components/ProgressBar.svelte';
	import Button from '@components/Button.svelte';

	let windowWidth;
	let navToogle = false;
	function logout() {
    request('logout')
    .then(() => {
      quota.set({
        max: 0,
        total: 0
      })

      files.set([])
      goto('/auth/login');
    })
	}
</script>

<svelte:window bind:outerWidth={windowWidth} />

{#if windowWidth > 1080 || (windowWidth <= 1080 && navToogle)}
	<div class="navbar">
		<i class="logo"><img src="/img/logo.svg" alt="BLOC" /></i>
		<div class="links">
			<div class="files">
				<a href="/app/files/" class:active={$page.path === '/app/files'}
					><IconFolder color="#F0F6FC40" width="18px" height="18px" /> {$LL.APP_NAV_LINK_FILES()}</a
				>
				<a href="/app/files/favorites/" class:active={$page.path === '/app/favorites'}
					><IconStar color="#F0F6FC40" width="18px" height="18px" />
					{$LL.APP_NAV_LINK_FAVORITES()}</a
				>
				<a href="/app/files/shared/" class:active={$page.path === '/app/shared'}
					><IconPeoples color="#F0F6FC40" width="18px" height="18px" />
					{$LL.APP_NAV_LINK_SHARED()}</a
				>
			</div>
			<div class="more">
				<div
					class:account-active={$page.path === '/app/settings'}
					class="account"
					on:click={() => goto('/app/settings')}
				>
					<div class="infos">
						<div class="user">
							<User username={$session.user.username} />
							<span>{$session.user.username}</span>
						</div>
						<IconExit on:click={() => logout()} color="#F0F6FC40" width="16px" height="18px" />
					</div>
					<div class="user-quota">
						<ProgressBar
							height="5px"
							width="100%"
							progress={Math.floor(($quota.total / $quota.max) * 100)}
						/>
						<span>{bitsToSize($quota.total)}/{bitsToSize($quota.max)}</span>
					</div>
				</div>
				<div class="help">
					<span>{$LL.APP_NAV_TEXT_DONATE()}</span>
					<div class="donate">
						<Button link="https://coldwire.org/donate" target="_blank" color="var(--primary-green)">
							{$LL.APP_NAV_BUTTON_DONATE()}
							<IconHeart width="16px" height="16px" color="#F0F6FC" />
						</Button>
						<a class="donate-info" href="https://coldwire.org/donate#about" target="_blank"
							>{$LL.APP_NAV_TEXT_DONATE_HOW()}</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
	{#if windowWidth <= 1080 && navToogle}
		<div on:click={(navToogle = !navToogle)} href="#" class="mobile-btn">
			<IconMenu color="#F0F6FC40" size="32px" />
		</div>
		<div class="overlay" on:click={(navToogle = false)} />
	{/if}
{/if}

<style>
	.navbar {
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		width: 200px;
		background-color: var(--complementary-gray-3);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding-left: 32px;
		padding-right: 32px;
		padding-top: 24px;
		padding-bottom: 24px;
		color: var(--complementary-white-25);
	}
	.logo {
		position: absolute;
		top: 24px;
		left: 32px;
		width: 30px;
	}
	.links {
		margin-top: 100px;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.files a {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		padding: 0px 14px;
		margin: 16px 0px;
		gap: 12px;
		height: 42px;
		border-radius: 8px;
		font-size: 14px;
		cursor: pointer;
		transition-duration: 0.3s;
	}
	.files a:hover {
		background-color: var(--complementary-white-5);
	}
	.files a.active {
		background-color: var(--complementary-white-5);
	}
	.more {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.more .account {
		height: 90px;
		background-color: var(--complementary-white-5);
		border: 1px solid transparent;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 16px;
		padding: 0 16px;
	}
	.more .account:hover {
		border: 1px solid var(--complementary-white-5);
	}
	.more .account-active {
		border: 1px solid var(--complementary-white-5);
	}
	.more .account .infos {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.more .account .infos .user {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 16px;
		font-size: 14px;
	}
	.more .account .user-quota {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
	}
	.more .account .user-quota span {
		font-size: 10px;
		text-align: right;
		flex-shrink: 0;
	}
	.more .help {
		height: 130px;
		background-color: var(--primary-green-25);
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		padding: 0 16px;
	}
	.more .help span {
		font-size: 14px;
	}
	.more .help .donate {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		gap: 16px;
	}
	.more .help .donate .donate-info {
		font-size: 12px;
		color: var(--complementary-white-50);
	}
	.mobile-btn {
		position: absolute;
		top: 24px;
		left: 32px;
		max-width: 25px;
		z-index: 200;
		display: none;
		font-size: 12px;
	}
	.overlay {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 90;
	}
	@media only screen and (max-width: 1080px) {
		.navbar {
			z-index: 100;
		}
		.logo {
			display: none;
		}
		.links {
			margin-top: 50px;
		}
		.mobile-btn {
			display: block;
		}
	}
</style>
