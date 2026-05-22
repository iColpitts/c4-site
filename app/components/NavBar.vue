<template>
  <nav ref="navRef" :class="['nav-bar', { 'nav-bar--fixed': isFixed }]">
    <a
      v-for="item in navItems"
      :key="item.id"
      :href="`#${item.id}`"
      class="nav-link"
    >
      {{ item.label }}
    </a>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const navItems = [
  { id: 'About', label: 'About' },
  { id: 'Submissions', label: 'Submissions' },
  { id: 'Sponsorship', label: 'Sponsors' },
  // { id: 'Media', label: 'Media' },
];

const navRef = ref<HTMLElement | null>(null);
const isFixed = ref(false);
let initialTop = 0;

const updateSticky = () => {
  if (!navRef.value) return;
  isFixed.value = window.scrollY > initialTop;
};

onMounted(() => {
  if (navRef.value) {
    initialTop = navRef.value.offsetTop;
  }
  updateSticky();
  window.addEventListener('scroll', updateSticky, { passive: true });
  window.addEventListener('resize', updateSticky);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateSticky);
  window.removeEventListener('resize', updateSticky);
});
</script>

<style scoped>
@import "tailwindcss";

.nav-bar {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem 0 2rem;
  transition: all 0.25s ease;
}

.nav-bar--fixed {
  @apply border-2 my-4;
  position: fixed;
  top: 1rem;
  left: 1rem;
  right: auto;
  z-index: 50;
  justify-content: flex-start;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(16px);
  padding: 0.75rem 1rem;
  border-radius: 999px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
}

.nav-link {
  padding: 0.75rem 1.25rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: black;
  text-decoration: none;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.nav-link:hover,
.nav-link:focus-visible {
  background: rgba(255, 255, 255, 0.16);
  transform: translateY(-1px);
}
</style>
