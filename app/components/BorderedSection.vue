<template>
    <div v-if="bottomBorder == 'true'" class="flex md:flex-row flex-col justify-between border-t-2 border-b-2 py-4 mx-auto md:w-3xl w-full">
        <slot />
    </div>
    <div v-if="bottomBorder == 'false'" class="flex md:flex-row flex-col justify-between border-t-2 py-4 mx-auto md:w-3xl w-full">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        // Define any props if needed
        bottomBorder: {
            type: String,
            default: 'true',
        },
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