<script>
	export let username = 'User';
	export let shared = false;
	export let border;
	export let background;
	export let size = 32;

	function getUserColor(username) {
		const colors = [
			'#0061FF',
			'#CC317C',
			'#009639',
			'#D9730D',
			'#DFAB01',
			'#0F7B6C',
			'#0B6E99',
			'#6940A5',
			'#AD1A72',
			'#E03E3E'
		];

		const colorFromUsername = (username) => {
			let hash = 0;
			for (let i = 0; i < username.length; i++) {
				hash = username.charCodeAt(i) + ((hash << 5) - hash);
			}

			let c = (hash & 0x00ffffff).toString(16).toUpperCase();

			return '00000'.substring(0, 6 - c.length) + c;
		};

		// from https://stackoverflow.com/a/5624139
		const hexToRgb = (hex) => {
			const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

			hex = hex.replace(shorthandRegex, (m, r, g, b) => {
				return r + r + g + g + b + b;
			});

			const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
			return result
				? {
						r: parseInt(result[1], 16),
						g: parseInt(result[2], 16),
						b: parseInt(result[3], 16)
				  }
				: null;
		};

		// Distance between 2 colors (in RGB)
		// https://stackoverflow.com/questions/23990802/find-nearest-color-from-a-colors-list
		const distance = (a, b) => {
			return Math.sqrt(Math.pow(a.r - b.r, 2) + Math.pow(a.g - b.g, 2) + Math.pow(a.b - b.b, 2));
		};

		let colorHex = `#${colorFromUsername(username)}`;

		let lowest = Number.POSITIVE_INFINITY;
		let tmp;
		let index = 0;

		for (let i in colors) {
			tmp = distance(hexToRgb(colorHex), hexToRgb(colors[i]));
			if (tmp < lowest) {
				lowest = tmp;
				index = i;
			}
		}

		console.log(colors[index], index);

		return colors[index];
	}
</script>

<div
	class="user"
	style={(border ? `border-color: ${border};` : '') +
		`background-color: ${
			background ? background : getUserColor(username)
		};width:${size}px;height:${size}px;font-size:${size < 24 ? 6 : 12}px;`}
	class:shared
>
	{username.length >= 1 ? username.slice(0, 1).toLocaleUpperCase() : username}
</div>

<style>
	.user {
		border-radius: 25px;
		display: flex;
		align-items: center;
		justify-content: center;
		user-select: none;
	}

	.shared {
		border: 4px solid var(--secondary-gray-2);
		margin-right: -16px;
	}
</style>
