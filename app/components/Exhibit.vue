<template>
    <div>
        <CollapsibleSection v-for="art in program" :key="art.Title" :title="art.Title">
            <template #title>
            <div class="flex flex-grow justify-between w-100">
                <h3 class="hover:text-blue-bright">{{ art.Title }}</h3>
                <span v-if="art.Name" :key="art.Name" class="px-2">
                    {{ art.Name }}
                </span>
            </div>
            </template>
            <template #expand>
                <p v-if="art.Description" class="border-b-1 border-blue-bright pb-4">{{ art.Description }}</p>
                <div v-if="art.Name" :key="art.Name">
                    <h3 class="text-xl pt-4">{{ art.Name }}</h3>
                    <p v-if="art.Bio" class="font-base pb-4">{{ art.Bio }}</p>
                </div>
            </template>
        </CollapsibleSection>
    </div>
</template>

<script>
    import exhibitionProgram from '~/assets/exhibition.json'

    export default {
        data() {
            return {
                program: exhibitionProgram  
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>