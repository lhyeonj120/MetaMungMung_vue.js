// 모임 설정 페이지
<template>
    <div class="services_section layout_padding">
      <div class="container">
        <OnMeetingSetting />
      </div>
    </div>
</template>

<script>
import OnMeetingSetting from '@/components/meeting/onMeeting/OnMeetingSetting.vue'

export default {
    components: {
        OnMeetingSetting
    },
    setup () {
    }
}
</script>
