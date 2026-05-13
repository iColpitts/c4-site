<template>
    <div class="column-card" :style="{ borderRadius: cards.radius, animationDuration: cards.duration, animationDelay: cards.delay }">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

defineProps<{
    gap?: string
}>()

const generateRandomRadius = () => {
    return Array.from({ length: 4 }, () => Math.floor(Math.random() * 40) + 40).join('% ') + '%';
};

const getRandomDuration = () => {
    return `${Math.random() * 3 + 5}s`;
};

const getRandomDelay = () => {
    return `${Math.random() * 2}s`;
};

const cards = { 
    radius: generateRandomRadius(),
    duration: getRandomDuration(),
    delay: getRandomDelay(),
};
</script>

<style scoped>
@import "tailwindcss";

.column-card {
    @apply p-16;
    /* Organic shape with random radius per card */
    border-radius: 1.25rem;
    animation: blobWobble 6s ease-in-out infinite;

    /* Soft watercolor fill */
    background: var(--color-blue-light);
        /* radial-gradient(circle at 30% 40%, transparent 70%, var(--color-lavender-light)),
        radial-gradient(circle at 40% 70%, transparent 70%, var(--color-lavender-light)); */

    /* Puffy edge */
    box-shadow:
        inset 0 16px 16px var(--color-grey),
        inset -6px -12px 20px var(--color-grey);

    /* Slight blur softness */
    filter: saturate(1.15) contrast(1.02);
}

@keyframes blobWobble {
    0% {
        border-radius: 58% 42% 63% 37% / 42% 54% 46% 58%;
    }
    25% {
        border-radius: 42% 58% 37% 63% / 54% 42% 58% 46%;
    }
    50% {
        border-radius: 63% 37% 42% 58% / 46% 58% 42% 54%;
    }
    75% {
        border-radius: 37% 63% 58% 42% / 58% 46% 54% 42%;
    }
    100% {
        border-radius: 58% 42% 63% 37% / 42% 54% 46% 58%;
    }
}
</style>