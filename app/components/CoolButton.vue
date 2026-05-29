<template>
    <button 
        type="button"
        @click="onClick()" 
        class="w-[calc(100%-2rem)] bg-blue-bright p-2 text-white font-bold hover:outline-solid hover:text-black hover:bg-blue-light cursor-pointer m-4">
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