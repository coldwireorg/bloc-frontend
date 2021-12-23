<div class="background"></div>

<div class="auth">
  <i class="logo"><img src="/img/logo.svg" alt="BLOC" /></i>
	<slot />
  <a class="artist" href="https://www.artstation.com/attemme" target="_blank">Artwork by Rostyslav Zagornov</a>
</div>


<style>
  .background {
    background: no-repeat center url(/img/background.jpg);
		background-size: cover;
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
  }
  
	.auth {
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
  }

  .auth .logo {
		position: absolute;
		top: 24px;
		left: 32px;
		width: 30px;
	}

	.auth .artist {
		position: absolute;
		bottom: 32px;
		left: 32px;
		font-size: 10px;
		user-select: none;

		color: var(--complementary-white);
		text-decoration: none;
    padding: 8px;
    background-color: var(--complementary-white-25);
    border-radius: 8px;
	}

	@media only screen and (max-width: 900px) {}
</style>
