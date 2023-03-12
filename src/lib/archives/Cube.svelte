<div class="scene drop-shadow-4xl">
	<div class="cube">
		<div class="cube__face cube__face--front " />
		<div class="cube__face cube__face--back " />
		<div class="cube__face cube__face--right " />
		<div class="cube__face cube__face--left " />
		<div class="cube__face cube__face--top " />
		<div class="cube__face cube__face--bottom " />
	</div>
</div>

<style>
	:root {
		--amber: rgb(180 83 9);
		--dimension: 200px;
	}

	.scene {
		width: var(--dimension);
		height: var(--dimension);
		perspective: 600px;
	}

	.cube {
		width: 100%;
		height: 100%;
		position: relative;
		transform-style: preserve-3d;
		transform: rotateX(180deg) rotateY(135deg) translateZ(5px);
	}

	.cube__face {
		position: absolute;
		width: var(--dimension);
		height: var(--dimension);
		border: 3px solid white;
	}

	.cube__face--front {
		transform: rotateY(0deg) translateZ(100px);
	}
	.cube__face--right {
		transform: rotateY(90deg) translateZ(100px);
	}
	.cube__face--back {
		transform: rotateY(180deg) translateZ(100px);
	}
	.cube__face--left {
		transform: rotateY(-90deg) translateZ(100px);
	}
	.cube__face--top {
		transform: rotateX(90deg) translateZ(100px);
	}
	.cube__face--bottom {
		transform: rotateX(-90deg) translateZ(100px);
	}
</style>
