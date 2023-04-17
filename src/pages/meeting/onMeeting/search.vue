<template>
    <div class="services_section layout_padding">
        <div class="container">
            <MeetingHeader/>
            <hr>
            <OnMeetingCategory/>
            <hr>
            <OnMeetingList/>
        </div>
    </div>
</template>

<script>
import {useRoute} from 'vue-router';
import MeetingHeader from '../../../components/meeting/onMeeting/OnMeetingHeader.vue';
import OnMeetingList from '../../../components/meeting/onMeeting/OnMeetingList.vue';
import OnMeetingCategory from '../../../components/meeting/onMeeting/OnMeetingCategory.vue';

export default {
    components: {
        MeetingHeader,
        OnMeetingList,
        OnMeetingCategory
    },
    setup(){
        const route = useRoute();

        const print = () => {
            console.log(route.query.keyword);
        }
        print();
    }
}
</script>

<style>

</style>