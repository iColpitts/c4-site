<template>
    <div :class="`flex flex-col ${gap || 'gap-4'} justify-evenly px-18 py-6 max-w-xl`">
        <div class="column-card w-full" :style="{ borderRadius: cards[0].radius }">
            <slot name="column-1" />
        </div>
        <div class="column-card w-full" :style="{ borderRadius: cards[1].radius }">
            <slot name="column-2" />
        </div>
        <div class="column-card w-full" :style="{ borderRadius: cards[2].radius }">
            <slot name="column-3" />
        </div>
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

const cards = [
    { radius: generateRandomRadius() },
    { radius: generateRandomRadius() },
    { radius: generateRandomRadius() },
];
</script>

<style scoped>
@import "tailwindcss";

.column-card {
    @apply py-8 px-16;
    /* Organic shape with random radius per card */
    border-radius: 1.25rem;

    /* Soft watercolor fill */
    background:
        radial-gradient(circle at 30% 30%, transparent 70%, var(--color-green-light)),
        radial-gradient(circle at 70% 70%, transparent 70%, var(--color-green-light));

    /* Puffy edge */
    box-shadow:
        inset 0 2px 8px var(--color-green-light),
        inset -6px -8px 14px var(--color-green),
        0 4px 10px rgba(0, 0, 0, 0.06);

    /* Slight blur softness */
    filter: saturate(1.15) contrast(1.02);
}

.column-card+.column-card {
    margin-top: 1rem;
}

@media (min-width: 768px) {
    .column-card+.column-card {
        margin-top: 0;
    }
}
</style>