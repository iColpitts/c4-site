<template>
    <div>
        <CollapsibleSection v-for="event in program" :key="event.Title" :title="event.Title">
            <template #title>
            <p>{{ event.Time }}</p>
            <div class="flex-col text-right justify-between w-100">
                <h3 class="hover:text-blue-bright">{{ event.Title }}</h3>
                <span v-if="event.Presenter" v-for="presenter in event.Presenter" :key="presenter.Name" class="px-2">
                    {{ presenter.Name }}
                </span>
                </div>
            </template>
            <template #expand>
                <p v-if="event.Description" class="border-b-1 border-blue-bright pb-4">{{ event.Description }}</p>
                <div v-if="event.Presenter" v-for="presenter in event.Presenter" :key="presenter.Name">
                    <h3 class="text-xl pt-4">{{ presenter.Name }}</h3>
                    <p v-if="presenter.Bio" class="font-base pb-4">{{ presenter.Bio }}</p>
                </div>
            </template>
        </CollapsibleSection>
    </div>
</template>

<script>
    import conferenceProgram from '~/assets/conference.json'

    export default {
        data() {
            return {
                program: conferenceProgram
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>