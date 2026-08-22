<template>
    <div>
        <PageSection title="Conference" subtitle="Sept. 19th || 9:30AM - 5PM"/>
        <Event />
        <PageSection title="Exhibition" subtitle="Sept. 18th - Oct. 9th || Tue-Fri 10AM-5PM"/>
        <Exhibit />
    </div>
</template>

<script>
import PageSection from '../components/PageSection.vue';
import Event from '../components/Event.vue';
import Exhibit from '../components/Exhibit.vue';

export default {
    setup () {
        

        return {}
    }
}
</script>
