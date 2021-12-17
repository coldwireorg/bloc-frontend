<script context="module">
	export async function load({ session }) {
		if (session.user) {
			return { redirect: '/app/files', status: 302 };
		} else {
			return {};
		}
	}
</script>

<div class="auth">
	<slot />
	<div class="auth-bg">
		<a href="https://www.artstation.com/engstrom" target="_blank">Art by Robin Engström</a>
	</div>
</div>

<style>
	.auth-bg {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		width: 50%;
		background: no-repeat center url(/img/background.jpg);
		background-size: cover;
	}

	.auth-bg a {
		position: absolute;
		bottom: 8px;
		left: 8px;
		font-size: 10px;
		user-select: none;
		color: var(--secondary-white-50);
		text-decoration: none;
	}

	@media only screen and (max-width: 900px) {
		.auth-bg {
			display: none;
		}
	}
</style>
