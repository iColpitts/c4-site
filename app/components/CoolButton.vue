<template>
    <button 
        type="button"
        @click="onClick()" 
        class="w-full bg-blue-bright px-4 py-2 text-white font-bold hover:outline-solid hover:text-black hover:bg-blue-light cursor-pointer">
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        // Define any props if needed
        url: String,
    },
    setup(props) {
        // You can use props here if needed 
        const onClick = () => {
            window.open(props.url, '_blank', 'noreferrer');
        };
        return { onClick };
    }
}
</script>

<style lang="scss" scoped>

</style>