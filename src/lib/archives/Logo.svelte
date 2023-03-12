<script>
	export let bg = 'amber-700';
</script>

<div class="scene drop-shadow-3xl dimension">
	<div class="cube w-full h-full relative">
		<div
			class="cube__face absolute 
      cube__face--front bg-{bg}"
		/>
		<div
			class="cube__face absolute 
      cube__face--back bg-{bg}"
		/>
		<div
			class="cube__face absolute
      cube__face--right bg-{bg}"
		/>
		<div
			class="cube__face absolute 
      cube__face--left bg-{bg}"
		/>
		<div
			class="cube__face absolute 
      cube__face--top bg-{bg}"
		/>
		<div
			class="cube__face absolute 
      cube__face--bottom bg-{bg}"
		/>
	</div>
</div>

<style>
	:root {
		--amber: rgb(180 83 9);
		--dimension: 4rem;
	}

	.scene {
		width: var(--dimension);
		height: var(--dimension);
		perspective: 8rem;
	}

	.cube {
		transform-style: preserve-3d;
		animation: rotate 2s linear infinite;
	}

	.cube__face {
		width: var(--dimension);
		height: var(--dimension);
		border-width: 2px;
		border: 3px solid white;
	}

	.cube__face--front {
		transform: rotateY(0deg) translateZ(2rem);
	}
	.cube__face--right {
		transform: rotateY(90deg) translateZ(2rem);
	}
	.cube__face--back {
		transform: rotateY(180deg) translateZ(2rem);
	}
	.cube__face--left {
		transform: rotateY(-90deg) translateZ(2rem);
	}
	.cube__face--top {
		transform: rotateX(90deg) translateZ(2rem);
	}
	.cube__face--bottom {
		transform: rotateX(-90deg) translateZ(2rem);
	}

	@keyframes rotate {
		0% {
			transform: translateZ(-100px) rotateX(90deg);
		}
		50% {
			transform: translateZ(-100px) rotateX(180deg);
		}
		100% {
			transform: translateZ(-100px) rotateY(180deg);
		}
	}
</style>
