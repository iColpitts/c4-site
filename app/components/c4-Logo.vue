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
      @mouseenter="letter.showText = true"
      @mouseleave="letter.showText = false"
    >
      <img :src="letter.src" :alt="letter.name" />
      <h2 v-show="letter.showText" class="letter-text pr-8">{{ letter.text }}</h2>
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

const letters = ref([
  { name: 'C', src: letterC, text: 'onference', floatSpeed: getRandomSpeed(4, 6), rotateSpeed: getRandomSpeed(0.8, 1), showText: false },
  { name: '4', src: letter4, text: 'or', floatSpeed: getRandomSpeed(6, 10), rotateSpeed: getRandomSpeed(0.5, 0.6), showText: false },
  { name: 'A', src: letterA, text: 'rt', floatSpeed: getRandomSpeed(2, 4), rotateSpeed: getRandomSpeed(0.3, 0.6), showText: false },
  { name: 'G', src: letterG, text: 'ames', floatSpeed: getRandomSpeed(1, 4), rotateSpeed: getRandomSpeed(0.3, 0.6), showText: false },
]);
</script>

<style scoped>
@import "tailwindcss";
.logo-container {
    @apply flex flex-row justify-between items-center justify-center;
  display: flex;
  align-items: center;
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
    transform: translateY(-50px);
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

.logo-letter {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.letter-text {
  transition: opacity 0.3s ease;
  white-space: nowrap;
  pointer-events: none;
}

</style>
