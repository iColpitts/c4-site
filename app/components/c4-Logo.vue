<template>
  <div class="logo-container">
    <div
      v-for="(letter, index) in letters"
      :key="index"
      class="logo-letter"
      :style="{
        animationDelay: `${index * 0.1}s`,
        '--float-duration': `${letter.floatSpeed}s`,
        '--rotate-duration': `${letter.rotateSpeed}s`,
      }"
    >
      <img :src="letter.src" :alt="letter.name" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import letterC from '@/assets/images/C.png';
import letter4 from '@/assets/images/4.png';
import letterA from '@/assets/images/A.png';
import letterG from '@/assets/images/G.png';

const getRandomSpeed = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const letters = [
  { name: 'C', src: letterC, floatSpeed: getRandomSpeed(2, 4), rotateSpeed: getRandomSpeed(0.3, 0.6) },
  { name: '4', src: letter4, floatSpeed: getRandomSpeed(2, 4), rotateSpeed: getRandomSpeed(0.3, 0.6) },
  { name: 'A', src: letterA, floatSpeed: getRandomSpeed(2, 4), rotateSpeed: getRandomSpeed(0.3, 0.6) },
  { name: 'G', src: letterG, floatSpeed: getRandomSpeed(2, 4), rotateSpeed: getRandomSpeed(0.3, 0.6) },
];
</script>

<style scoped>
@import "tailwindcss";
.logo-container {
    @apply pb-8;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: left;
}

.logo-letter {
  animation: float var(--float-duration, 3s) ease-in-out infinite, rotate var(--rotate-duration, 0.4s) ease-in-out infinite;
}

.logo-letter img {
  max-width: 80px;
  height: auto;
  display: block;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes rotate {
  0%, 100% {
  }
  25% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
}
</style>
