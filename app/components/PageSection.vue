<template>
    <div class="page-section w-3xl mx-auto py-12 px-4">
        <h1 v-if="title" class="page-section__title">{{ title }}</h1>
        <h2 v-if="subtitle" class="page-section__subtitle max-w-3xl mx-auto">{{ subtitle }}</h2>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ 
    title?: string;
    subtitle?: string;
}>();
</script>