<script>
  export let color = "bg-amber-700";
</script>

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
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate 2s linear infinite;
}

.cube__face {
  position: absolute;
  width: var(--dimension);
  height: var(--dimension);
  border: 2px solid white;
}

.cube__face--front  { transform: rotateY(  0deg) translateZ(2rem); }
.cube__face--right  { transform: rotateY( 90deg) translateZ(2rem); }
.cube__face--back   { transform: rotateY(180deg) translateZ(2rem); }
.cube__face--left   { transform: rotateY(-90deg) translateZ(2rem); }
.cube__face--top    { transform: rotateX( 90deg) translateZ(2rem); }
.cube__face--bottom { transform: rotateX(-90deg) translateZ(2rem); }

@keyframes rotate {
  0% {
    transform: translateZ(-100px) rotateX(  90deg);
  }
  50% {
    transform: translateZ(-100px) rotateX( 180deg);
  }
  100% {
    transform: translateZ(-100px) rotateY( 180deg);
  }
}
</style>

<div class="scene drop-shadow-3xl">
  <div class="cube">
    <div class="cube__face cube__face--front {color}"></div>
    <div class="cube__face cube__face--back {color}"></div>
    <div class="cube__face cube__face--right {color}"></div>
    <div class="cube__face cube__face--left {color}"></div>
    <div class="cube__face cube__face--top {color}"></div>
    <div class="cube__face cube__face--bottom {color}"></div>
  </div>
</div>