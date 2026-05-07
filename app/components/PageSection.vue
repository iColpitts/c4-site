<template>
    <div class="page-section">
        <h1 class="page-section__title">{{ title }}</h1>
        <h2 class="page-section__subtitle">{{ subtitle }}</h2>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ 
    title: string;
    subtitle: string;
}>();
</script>