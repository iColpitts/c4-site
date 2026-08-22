<template>
  <div class="page-content">
    <div class="flex flex-col gap-4">
      <C4Logo />
      <NavBar />
      <h3 class="text-center md:w-3xl mx-auto">a celebration of the weird and wonderful
        possibility at the
        intersection of art and games!</h3>
    </div>
    <NuxtPage />
   </div>
</template>

<script setup lang="ts">
import C4Logo from './components/c4-Logo.vue';
import NavBar from './components/NavBar.vue';
</script>

<style scoped>
@import "tailwindcss";

body {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, midnightblue, #111);
  height: 100vh;
}

h1 {
  position: absolute;
  font-size: 4em;
  padding-top: 50px;
  font-family: "Corben", cursive;
  letter-spacing: 0.6em;
  line-height: 1.4em;
  text-transform: uppercase;
  color: teal;
  font-weight: 400;
  text-align: center;
}

.bg-layer {
  @apply h-screen w-screen;
  position: absolute;
  top: -40vh;
  left: -20vw;
}

.noise {
  @apply w-screen h-screen;
  margin-top: -15%;
  background: radial-gradient(circle at 50% 50%,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)),
    url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  filter: contrast(145%) brightness(650%) invert(100%);
  mix-blend-mode: screen;
}

@media all and (-webkit-min-device-pixel-ratio:0) and (min-resolution: .001dpcm) {
  .noise {
    filter: contrast(125%) brightness(650%) invert(100%);
    mix-blend-mode: color-dodge;
  }
}

.center {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  width: 400px;
  height: 200px;
  background-color: antiquewhite;
  border-radius: 50%;
}
</style>
