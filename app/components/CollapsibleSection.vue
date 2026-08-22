<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
	title: string
	initiallyOpen?: boolean
}>(), {
	initiallyOpen: false,
})

const isOpen = ref(props.initiallyOpen)
</script>

<template>
	<BorderedSection class="collapsible-section" bottomBorder="false">
		<button
			class="collapsible-section__toggle"
			type="button"
			:aria-expanded="isOpen"
			@click="isOpen = !isOpen"
		>
			<div class="flex flex-grow w-100 justify-between"><slot class="flex" name="title" /></div>
            <span aria-hidden="true" class="pl-4">{{ isOpen ? '−' : '+' }}</span>

		</button>
	</BorderedSection>
    <div v-if="isOpen" class="justify-between mx-auto md:w-3xl w-full">
		<slot name="expand" />
	</div>
</template>

<style scoped>
@import "tailwindcss";

.collapsible-section__toggle {
	display: flex;
	width: 100%;
	border: 0;
	background: transparent;
	color: inherit;
	font: inherit;
	text-align: left;
	cursor: pointer;
}

.collapsible-section__content {
	
}
</style>
